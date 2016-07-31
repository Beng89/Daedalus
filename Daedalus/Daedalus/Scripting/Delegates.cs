using System.Dynamic;
using Microsoft.ClearScript.V8;

namespace Daedalus.Scripting {
  public delegate void EngineRegistrationFunction(V8ScriptEngine engine);
  public delegate ExpandoObject RequireFunction(string name);
  public delegate void ModuleInitializerFunction(ExpandoObject exports, RequireFunction require, Module module, string __filename, string __dirname);
}