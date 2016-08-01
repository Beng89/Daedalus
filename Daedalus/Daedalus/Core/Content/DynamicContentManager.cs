using Microsoft.Xna.Framework.Graphics;
using System.IO;
using System.Collections.Generic;
using Microsoft.Xna.Framework.Audio;

namespace Daedalus.Core.Content {
  public class DynamicContentManager {
    private GraphicsDevice _graphicsDevice;

    private Dictionary<string, Texture2D> _textureCache = new Dictionary<string, Texture2D>();
    private Dictionary<string, SoundEffect> _soundEffectsCache = new Dictionary<string, SoundEffect>();

    public DynamicContentManager(GraphicsDevice graphicsDevice) {
      _graphicsDevice = graphicsDevice;
    }

    public SoundEffect LoadSoundEffect(string path, bool overrideCache=false) {
      if(!overrideCache && _soundEffectsCache.ContainsKey(path)) {
        return _soundEffectsCache[path];
      }

      SoundEffect soundEffect;
      using(var stream = new FileStream(path, FileMode.Open)) {
        soundEffect = SoundEffect.FromStream(stream);
      }

      _soundEffectsCache.Add(path, soundEffect);

      return soundEffect;
    }

    public Texture2D LoadTexture2D(string path, bool overrideCache=false) {
      if (!overrideCache && _textureCache.ContainsKey(path)) {
        return _textureCache[path];
      }

      Texture2D texture;
      using (var stream = new FileStream(path, FileMode.Open)) {
        texture = Texture2D.FromStream(_graphicsDevice, stream);
      }

      _textureCache.Add(path, texture);

      return texture;
    }
  }
}