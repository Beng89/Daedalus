using Daedalus.JsonConverters;
using Microsoft.Xna.Framework;
using Newtonsoft.Json;

namespace Daedalus.Core.Animations {
  public class AnimationFrame {
    public float Duration = 33.0f;
    [JsonConverter(typeof(RectangleConverter))]
    public Rectangle Box = Rectangle.Empty;
    [JsonConverter(typeof(Vector2Converter))]
    public Vector2 Origin = Vector2.Zero;
  }
}
