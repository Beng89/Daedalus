using System;

namespace Daedalus.Core.Creatures.CreatureEventArgs {
  public class SpellCastAtEventArgs : EventArgs {
    public readonly Creature Caster;

    public SpellCastAtEventArgs(Creature caster) {
      Caster = caster;
    }
  }
}
