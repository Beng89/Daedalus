using Daedalus.Core.Animations;
using Daedalus.Core.Content;
using Daedalus.Core.Creatures;
using Microsoft.ClearScript.V8;
using Microsoft.Xna.Framework;

namespace Daedalus.NativeModules.Modules {
  public class DaedalusCoreModule : NativeModule {
    public Game Game;
    public DynamicContentManager ContentManager;

    public DaedalusCoreModule(Game game) 
      : base() {
      Game = game;
      ContentManager = new DynamicContentManager(Game.GraphicsDevice);
    }

    public override void Register(V8ScriptEngine engine) {
      // Expose the game
      engine.AddHostObject("GameObject", Game);

      // Daedalus.Core.Content
      engine.AddHostObject("Content", ContentManager);

      // Daedalus.Core.Adventures

      // Daedalus.Core.Animations
      engine.AddHostType("Animation", typeof(Animation));
      engine.AddHostType("AnimationController", typeof(AnimationController));
      engine.AddHostType("AnimationFrame", typeof(AnimationFrame));

      // Daedalus.Core.Creatures
      engine.AddHostType("Creature", typeof(Creature));
      engine.AddHostType("CreatureAttributes", typeof(CreatureAttributes));
      engine.AddHostType("CreatureAttributeType", typeof(CreatureAttributeType));
      engine.AddHostType("CreatureGender", typeof(CreatureGender));
      engine.AddHostType("CreatureRace", typeof(CreatureRace));
    }
  }
}
