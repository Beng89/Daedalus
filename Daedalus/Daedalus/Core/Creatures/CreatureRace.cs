namespace Daedalus.Core.Creatures {
  public class CreatureRace : INameableObject {
    public CreatureAttributes Attributes = new CreatureAttributes();
    public string Name { get; set; }
    public string Description { get; set; }
  }
}
