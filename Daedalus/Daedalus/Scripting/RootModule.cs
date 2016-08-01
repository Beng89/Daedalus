using Daedalus.NativeModules;
using Microsoft.ClearScript;
using Microsoft.ClearScript.V8;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Dynamic;
using System.IO;

namespace Daedalus.Scripting {
  public class RootModule {
    private static readonly string _scriptHeader = @"host.del(ModuleInitializerFunction, function (exports, require, module, __filename, __dirname) { " + Environment.NewLine;
    private static readonly string _scriptFooter = Environment.NewLine + @"});";

    public RootModule(string root) {
      Root = Environment.CurrentDirectory + Path.DirectorySeparatorChar + root + Path.DirectorySeparatorChar;
      ModuleCache = new Dictionary<string, Module>();

      Engine = new V8ScriptEngine();

      // this is required in order for interop
      Engine.AddHostObject("host", new HostFunctions());

      // Expose the console for logging
      Engine.AddHostType("Log", typeof(Console));

      // Expose the ModuleInitializerFunction for creating modules
      Engine.AddHostType("ModuleInitializerFunction", typeof(ModuleInitializerFunction));
    }
    public RootModule(string root, ObservableCollection<NativeModule> nativeModuleRegistrations) : this(root) {
      // Register the native modules
      foreach(var module in nativeModuleRegistrations) {
        module.Register(Engine);
      }

      nativeModuleRegistrations.CollectionChanged += Registrations_CollectionChanged;
    }

    private void Registrations_CollectionChanged(object sender, System.Collections.Specialized.NotifyCollectionChangedEventArgs e) {
      switch(e.Action) {
        case System.Collections.Specialized.NotifyCollectionChangedAction.Add:
          // new items, so we should register them with the engine
          foreach(var item in e.NewItems) {
            var fn = item as NativeModule;
            fn?.Register(Engine);
          }
 
          break;
        case System.Collections.Specialized.NotifyCollectionChangedAction.Remove:
          // todo: maybe we can remove modules in the future
          break;
      }
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
