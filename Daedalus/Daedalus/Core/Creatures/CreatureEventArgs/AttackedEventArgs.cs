using System;

namespace Daedalus.Core.Creatures.CreatureEventArgs {
  public class AttackedEventArgs : EventArgs {
    public readonly Creature Attacker;

    public AttackedEventArgs(Creature attacker) {
      Attacker = attacker;
    }
  }
}
