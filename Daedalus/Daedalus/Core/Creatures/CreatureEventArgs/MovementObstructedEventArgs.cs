using Daedalus.Core.Sprites;

namespace Daedalus.Core.Creatures.CreatureEventArgs {
  public class MovementObstructedEventArgs {
    public readonly Sprite Obstruction;

    public MovementObstructedEventArgs(Sprite obstruction) {
      Obstruction = obstruction;
    }
  }
}
