using System;

namespace Daedalus.Core.Creatures.CreatureEventArgs {
  public class CreatureAttributeChangedEventArgs : EventArgs {
    public readonly CreatureAttributeType Attribute;
    public readonly int Value;
    public CreatureAttributeChangedEventArgs(CreatureAttributeType attribute, int value) {
      Attribute = attribute;
      Value = value;
    }
  }
}
