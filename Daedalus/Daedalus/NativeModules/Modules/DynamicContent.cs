using Daedalus.Core;
using Microsoft.Xna.Framework.Graphics;

namespace Daedalus.NativeModules.Modules {
  public class DynamicContent : NativeModule {
    private DynamicContentManager _contentManager;

    public DynamicContent(GraphicsDevice device) : base() {
      _contentManager = new DynamicContentManager(device);

      RegistrationFunction = engine => {
        engine.AddHostObject("Content", _contentManager);
      };
    }
  }
}
