using Microsoft.ClearScript.V8;
using Newtonsoft.Json;
using System;
using System.Dynamic;
using System.IO;

namespace Daedalus.Scripting {
  public class Module {
    private readonly RootModule _host;
    private readonly V8ScriptEngine _engine;

    private readonly string __fileName;
    private readonly string __dirName;
    private string _fullPath;

    public ExpandoObject exports;
    public string resolve(string path) {
      // null or empty? booo!
      if (string.IsNullOrEmpty(path)) {
        return "";
      }
      // going forwards 
      else if (path.StartsWith("./")) {
        return __dirName + Path.DirectorySeparatorChar + path.Substring(2);
      }
      // going backwards
      else if (path.StartsWith("../")) {
        // keep popping directories off until we run out.
        var dir = __dirName;
        while (path.StartsWith("../")) {
          dir = Path.GetDirectoryName(dir);
          path = path.Substring(3);
        }
        return dir + Path.DirectorySeparatorChar + path;
      }
      // A root import
      else if (path.StartsWith("/")) {
        return _host.Root + path;
      }
      // a module that can be imported from the node_modules folder - this allows npm to be used as a package manager
      else {
        var root = _host.Root + Path.DirectorySeparatorChar + "node_modules" + Path.DirectorySeparatorChar + path;
        if (!Directory.Exists(root)) {
          throw new DirectoryNotFoundException(string.Format("The module {0} was not found", path));
        }

        // default to index
        var main = "index.js";

        // load the package.json file
        var packagePath = root + Path.DirectorySeparatorChar + "package.json";
        if (File.Exists(packagePath)) {
          var text = File.ReadAllText(packagePath);
          var json = JsonConvert.DeserializeObject<JsonPackage>(text);
          if (json != null) {
            main = json.main;
          }

          // remove the un-needed specifier
          if (main.StartsWith("./")) {
            main = main.Substring(2);
          }
        }

        return root + Path.DirectorySeparatorChar + main;
      }
    }
    public ExpandoObject require(string nameOrFile) {
      // get the full path and check for a cache of that
      var fullPath = resolve(nameOrFile);
      if (_host.ModuleCache.ContainsKey(fullPath)) {
        return _host.ModuleCache[fullPath].exports;
      }

      // create a new module at this point
      Module module = new Module(_host, fullPath);

      // grab the source code, compile it and evaluate it.
      var src = File.ReadAllText(fullPath);
      var script = _host.Compile(src);
      var fn = _engine.Evaluate(script) as ModuleInitializerFunction;

      // if the export is null, then something messed up the import (not really sure how that would happen).
      if (fn == null) {
        throw new NullReferenceException(string.Format("failed to load {0}", nameOrFile));
      }

      // execute the module
      fn(module.exports, module.require, module, module.__fileName, module.__dirName);

      // cache, cache, cache!
      _host.ModuleCache.Add(fullPath, module);

      // finally, return the exports
      return module.exports;
    }

    public Module(RootModule host, string path) {
      exports = new ExpandoObject();

      _host = host;
      _engine = host.Engine;
      _fullPath = path;

      __dirName = Path.GetDirectoryName(path);
      __fileName = Path.GetFileName(path);
    }
  }
}
