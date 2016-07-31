using System.Dynamic;

namespace Daedalus.Scripting {
  public delegate ExpandoObject RequireFunction(string name);
  public delegate void ModuleInitializerFunction(ExpandoObject exports, RequireFunction require, Module module, string __filename, string __dirname);
}