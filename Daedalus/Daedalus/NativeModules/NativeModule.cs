using Microsoft.ClearScript.V8;

namespace Daedalus.NativeModules {
  public abstract class NativeModule {
    public NativeModule() { }

    public abstract void Register(V8ScriptEngine engine);
  }
}
