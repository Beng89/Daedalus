using Daedalus.JsonConverters;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using Newtonsoft.Json;

namespace Daedalus.Core.Sprites {
  public abstract class Sprite : GameComponent, INameableObject {
    public static Vector2 ComputePixelCollision(Sprite a, Sprite b, Rectangle aFrame, Rectangle bFrame, Color[] aColors, Color[] bColors) {
      // TODO: This is a very intensive method that could use optimizing in the future.
      // TODO: One possible optimization would be to incorporate the direction into the detection process.
      Matrix matrixA = a.GetWorldMatrix();
      Matrix fromAToB = matrixA * Matrix.Invert(b.GetWorldMatrix());

      int maxX2 = bFrame.Width;
      int maxY2 = bFrame.Height;

      for (int ax = 0; ax < aFrame.Width; ax++) {
        // By computing the row here we save (aFrame.Height - 1) multiplications
        var aRow = ax * aFrame.Height;
        for (int ay = 0; ay < aFrame.Height; ay++) {
          if (aColors[aRow + ay].A == 0) {
            continue;
          }

          Vector2 pos1 = new Vector2(ax, ay);
          Vector2 pos2 = Vector2.Transform(pos1, fromAToB);

          int bx = (int)pos2.X;
          int by = (int)pos2.Y;
          if (bx >= 0 && bx < maxX2 && by >= 0 && by < maxY2) {
            if (bColors[bx + by * bFrame.Width].A > 0) {
              return Vector2.Transform(pos1, matrixA);
            }
          }
        }
      }

      return -Vector2.One;
    }

    public string Name { get; set; }
    public string Description { get; set; }

    // Drawing Components
    public abstract Texture2D Texture { get; }
    public abstract Texture2D CollisionTexture { get; }

    [JsonConverter(typeof(RectangleConverter))]
    public abstract Rectangle Frame { get; }
    public abstract Vector2 Origin { get; }

    public Color[] GetColors(Rectangle frame) {
      Color[] colors = new Color[frame.Width * frame.Height];
      Texture.GetData(0, Frame, colors, 0, frame.Width * frame.Height);

      return colors;
    }
    public Matrix GetWorldMatrix() {
      // This is negative because the spritebatch inverts the origin while drawing.
      var origin = -Origin;
      var matrix = Matrix.CreateTranslation(origin.X, origin.Y, 0);

      if (Rotation != 0) {
        matrix *= Matrix.CreateRotationZ(Rotation);
      }
      if (Scale.X != 0 || Scale.Y != 0) {
        matrix *= Matrix.CreateScale(Scale.X, Scale.Y, 1);
      }

      return matrix * Matrix.CreateTranslation(Position.X, Position.Y, 0);
    }
    public Vector2 CheckCollision(Sprite b) {
      Rectangle aFrame = Frame;
      Rectangle bFrame = b.Frame;

      Color[] aColors = GetColors(aFrame);
      Color[] bColors = b.GetColors(bFrame);

      // This is a simple optimization that wll base the looping off of the smaller sprite.
      if (aColors.Length < bColors.Length) {
        return ComputePixelCollision(this, b, aFrame, bFrame, aColors, bColors);
      }
      return ComputePixelCollision(b, this, bFrame, aFrame, bColors, aColors);
    }

    [JsonConverter(typeof(ColorConverter))]
    public Color Color = Color.White;
    public float Rotation = 0.0f;
    public SpriteEffects Effects = SpriteEffects.None;
    public float Depth = .75f;

    [JsonConverter(typeof(Vector2Converter))]
    public Vector2 Position = Vector2.Zero;
    [JsonConverter(typeof(Vector2Converter))]
    public Vector2 Scale = Vector2.One;

    public override void Initialize() {
      Game.Components.Add(this);
      base.Initialize();
    }

    public Sprite(Game game) : base(game) {
      Enabled = true;
    }
  }
}
