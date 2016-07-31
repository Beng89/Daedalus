using Daedalus.Scripting;
using System.Collections.ObjectModel;

namespace Daedalus.NativeModules {
  public abstract class NativeModule {
    public NativeModule() { }

    public virtual void Initialize(ObservableCollection<EngineRegistrationFunction> registrations) {
      if(!registrations.Contains(RegistrationFunction)) {
        registrations.Add(RegistrationFunction);
      }
    }
 
    public EngineRegistrationFunction RegistrationFunction { get; protected set; }
  }
}
