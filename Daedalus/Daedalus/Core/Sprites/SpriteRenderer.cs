using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using System.Collections.Generic;

namespace Daedalus.Core.Sprites {
  /// <summary>
  /// This is a game component that implements IUpdateable.
  /// </summary>
  public class SpriteRenderer : DrawableGameComponent {
    public SpriteRenderer(Game game)
        : base(game) {
    }

    private void _componentAddedEventHandler(object sender, GameComponentCollectionEventArgs e) {
      Sprite sprite = e.GameComponent as Sprite;
      if (sprite != null) {
        Sprites.Add(sprite);
      }
    }
    private void _componentRemovedEventHandler(object sender, GameComponentCollectionEventArgs e) {
      Sprite sprite = e.GameComponent as Sprite;
      if (sprite != null) {
        Sprites.Remove(sprite);
      }
    }
    private SpriteBatch _spriteBatch;

    /// <summary>
    /// Allows the game component to perform any initialization it needs to before starting
    /// to run.  This is where it can query for any required services and load content.
    /// </summary>
    public override void Initialize() {
      // Add any componentst that are already in existence.
      foreach(var component in Game.Components) {
        Sprite sprite = component as Sprite;
        if(sprite != null) {
          Sprites.Add(sprite);
        }
      }
      Game.Components.ComponentAdded += _componentAddedEventHandler;
      Game.Components.ComponentRemoved += _componentRemovedEventHandler;

      base.Initialize();
    }

    protected override void LoadContent() {
      base.LoadContent();

      _spriteBatch = new SpriteBatch(GraphicsDevice);
    }

    private List<Sprite> Sprites = new List<Sprite>();
    public override void Draw(GameTime gameTime) {
      _spriteBatch.Begin();

      foreach (Sprite sprite in Sprites) {
        if (sprite.Enabled) {
          _spriteBatch.Draw(sprite.Texture, sprite.Position, sprite.Frame, sprite.Color, sprite.Rotation, sprite.Origin, sprite.Scale, sprite.Effects, sprite.Depth);
        }
      }

      _spriteBatch.End();

      base.Draw(gameTime);
    }
  }
}
