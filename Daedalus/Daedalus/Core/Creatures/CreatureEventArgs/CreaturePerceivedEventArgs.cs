using System;

namespace Daedalus.Core.Creatures.CreatureEventArgs {
  public class CreaturePerceivedEventArgs : EventArgs {
    public readonly Creature PerceivedCreature;
    public readonly CreaturePerceiptionType PerceptionType;

    public CreaturePerceivedEventArgs(Creature perceivedCreature) {
      PerceivedCreature = perceivedCreature;
    }
  }
}
