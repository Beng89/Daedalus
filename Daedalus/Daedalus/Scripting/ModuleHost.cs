using System.IO;
using Microsoft.ClearScript.V8;
using System.Collections.Generic;
using System;
using System.Dynamic;
using Newtonsoft.Json;
using Microsoft.ClearScript;

namespace Daedalus.Scripting {
  public class ModuleHost {
    private static readonly string _scriptHeader = @"host.del(ScriptReturnFunction, function (exports, require, module, __filename, __dirname) { " + Environment.NewLine;
    private static readonly string _scriptFooter = Environment.NewLine + @"});";

    public ModuleHost(string root) {
      Root = Environment.CurrentDirectory + Path.DirectorySeparatorChar + root + Path.DirectorySeparatorChar;
      ModuleCache = new Dictionary<string, Module>();

      Engine = new V8ScriptEngine();
      Engine.AddHostObject("host", new HostFunctions());
      Engine.AddHostType("Console", typeof(Console));
      Engine.AddHostType("ScriptReturnFunction", typeof(ModuleInitializerFunction));
    }

    public readonly V8ScriptEngine Engine;
    public readonly string Root;
    public readonly Dictionary<string, Module> ModuleCache;

    public V8Script Compile(string src) {
      src = _scriptHeader + src + _scriptFooter;
      return Engine.Compile(src);
    }
    public ExpandoObject Require(string path) {
      // work out the path and check the cache
      var fullPath = Root + path;
      if (ModuleCache.ContainsKey(fullPath)) {
        return ModuleCache[fullPath].exports;
      }

      // no cache, so create teh module
      var module = new Module(this, fullPath);

      // read the source code, compile it and evaluate it
      var src = File.ReadAllText(fullPath);
      var script = Compile(src);
      var rawExport = Engine.Evaluate(script);
      var fn = rawExport as ModuleInitializerFunction;

      // if the function is null, something messed with the export (not sure how this would happen).
      if (fn == null) {
        throw new NullReferenceException("Failed to load the main entry script.");
      }

      // execute the module
      var __fileName = Path.GetFileName(fullPath);
      var __dirName = Path.GetDirectoryName(fullPath);
      fn(module.exports, module.require, module, __fileName, __dirName);

      // cache it
      ModuleCache.Add(fullPath, module);

      // return the module
      return module.exports;
    }

    public void Dispose() {
      Engine.Dispose();
    }
  }
}
