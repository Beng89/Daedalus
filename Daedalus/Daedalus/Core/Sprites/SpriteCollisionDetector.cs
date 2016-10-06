using Microsoft.Xna.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Daedalus.Core.Sprites {
  public class SpriteCollisionDetector : GameComponent {
    public SpriteCollisionDetector(Game game) : base(game) {

    }

    private List<Sprite> _sprites = new List<Sprite>();
    public override void Initialize() {
      foreach(var component in Game.Components) {
        var sprite = component as Sprite;
        if(sprite != null && !_sprites.Contains(sprite)) {
          _sprites.Add(sprite);
        }
      }
      Game.Components.ComponentAdded += Components_ComponentAdded;
      Game.Components.ComponentRemoved += Components_ComponentRemoved;
    }

    private void Components_ComponentRemoved(object sender, GameComponentCollectionEventArgs e) {
      var sprite = e.GameComponent as Sprite;
      if(sprite != null) {
        _sprites.Remove(sprite);
      }
    }
    private void Components_ComponentAdded(object sender, GameComponentCollectionEventArgs e) {
      var sprite = e.GameComponent as Sprite;
      if (sprite != null && !_sprites.Contains(sprite)) {
        _sprites.Add(sprite);
      }
    }
    
    private int _updates = 0;
    public int UpdateThreshold = 5;
    public override void Update(GameTime gameTime) {
      _updates++;

      if (gameTime.IsRunningSlowly) {
        //UpdateThreshold++;
      }

      if (_updates >= UpdateThreshold) {
        _updates -= UpdateThreshold;
        for (int i = 0; i < _sprites.Count; i++) {
          var a = _sprites[i];

          for (int j = i + 1; j < _sprites.Count; j++) {
            var b = _sprites[j];

            var collisionPoint = a.CheckCollision(b);
            if (collisionPoint.X >= 0) {
              // we have a collision so we should do something about it

            }
          }
        }
      }
    }
  }
}
