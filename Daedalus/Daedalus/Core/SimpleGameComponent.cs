using Microsoft.Xna.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Daedalus.Core {
  public delegate void SimpleUpdateFunction(GameTime gameTime);

  public class SimpleGameComponent : GameComponent {
    public SimpleGameComponent(Game game)
      : base(game) { }

    public SimpleUpdateFunction UpdateFunction;
    public override void Update(GameTime gameTime) {
      UpdateFunction?.Invoke(gameTime);
    }
  }
}
