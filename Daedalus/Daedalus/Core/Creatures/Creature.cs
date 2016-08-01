using Daedalus.Core.Animations;
using Daedalus.Core.Sprites;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;

namespace Daedalus.Core.Creatures {
  public delegate void CreatureAttributeChangedHandler(Creature sender, CreatureAttributeType attibute, int value);

  public class Creature : Sprite {
    public event CreatureAttributeChangedHandler BaseAttributeChanged;
    public event CreatureAttributeChangedHandler ModifierAttributeChanged;

    public override Rectangle Frame {
      get {
        return Animations.ActiveAnimation.ActiveFrame.Box;
      }
    }
    public override Texture2D Texture {
      get {
        return Animations.ActiveAnimation.Texture;
      }
    }
    public override Texture2D CollisionTexture {
      get {
        return Animations.ActiveAnimation.collisionTexture;
      }
    }
    public override Vector2 Origin {
      get {
        return Animations.ActiveAnimation.ActiveFrame.Origin;
      }
    }

    public Vector2 Velocity = Vector2.Zero;
    public string FirstName = "";
    public string LastName = "";

    public CreatureGender Gender = CreatureGender.None;
    public AnimationController Animations = new AnimationController();
    public CreatureRace Race = new CreatureRace();

    public CreatureAttributes BaseAttributes = new CreatureAttributes();
    public int BaseAttackSpeed {
      get { return BaseAttributes.AttackSpeed; }
      set {
        if (BaseAttributes.AttackSpeed != value) {
          BaseAttributes.AttackSpeed = value;
          BaseAttributeChanged?.Invoke(this, CreatureAttributeType.AttackSpeed, value);
        }
      }
    }
    public int BaseCharisma {
      get { return BaseAttributes.Charisma; }
      set {
        if (BaseAttributes.Charisma != value) {
          BaseAttributes.Charisma = value;
          BaseAttributeChanged?.Invoke(this, CreatureAttributeType.Charisma, value);
        }
      }
    }
    public int BaseConstitution {
      get { return BaseAttributes.Constitution; }
      set {
        if (BaseAttributes.Constitution != value) {
          BaseAttributes.Constitution = value;
          BaseAttributeChanged?.Invoke(this, CreatureAttributeType.Constitution, value);
        }
      }
    }
    public int BaseDexterity {
      get { return BaseAttributes.Dexterity; }
      set {
        if (BaseAttributes.Dexterity != value) {
          BaseAttributes.Dexterity = value;
          BaseAttributeChanged?.Invoke(this, CreatureAttributeType.Dexterity, value);
        }
      }
    }
    public int BaseIntelligence {
      get { return BaseAttributes.Intelligence; }
      set {
        if (BaseAttributes.Intelligence != value) {
          BaseAttributes.Intelligence = value;
          BaseAttributeChanged?.Invoke(this, CreatureAttributeType.Intelligence, value);
        }
      }
    }
    public int BaseMovementSpeed {
      get { return BaseAttributes.MovementSpeed; }
      set {
        if (BaseAttributes.MovementSpeed != value) {
          BaseAttributes.MovementSpeed = value;
          BaseAttributeChanged?.Invoke(this, CreatureAttributeType.MovementSpeed, value);
        }
      }
    }
    public int BaseStength {
      get { return BaseAttributes.Strength; }
      set {
        if (BaseAttributes.Strength != value) {
          BaseAttributes.Strength = value;
          BaseAttributeChanged?.Invoke(this, CreatureAttributeType.Strength, value);
        }
      }
    }
    public int BaseWisdom {
      get { return BaseAttributes.Wisdom; }
      set {
        if (BaseAttributes.Wisdom != value) {
          BaseAttributes.Wisdom = value;
          BaseAttributeChanged?.Invoke(this, CreatureAttributeType.Wisdom, value);
        }
      }
    }

    public CreatureAttributes ModifierAttributes = new CreatureAttributes();
    public int ModifierAttackSpeed {
      get { return ModifierAttributes.AttackSpeed; }
      set {
        if (ModifierAttributes.AttackSpeed != value) {
          ModifierAttributes.AttackSpeed = value;
          ModifierAttributeChanged?.Invoke(this, CreatureAttributeType.AttackSpeed, value);
        }
      }
    }
    public int ModifierCharisma {
      get { return ModifierAttributes.Charisma; }
      set {
        if (ModifierAttributes.Charisma != value) {
          ModifierAttributes.Charisma = value;
          ModifierAttributeChanged?.Invoke(this, CreatureAttributeType.Charisma, value);
        }
      }
    }
    public int ModifierConstitution {
      get { return ModifierAttributes.Constitution; }
      set {
        if (ModifierAttributes.Constitution != value) {
          ModifierAttributes.Constitution = value;
          ModifierAttributeChanged?.Invoke(this, CreatureAttributeType.Constitution, value);
        }
      }
    }
    public int ModifierDexterity {
      get { return ModifierAttributes.Dexterity; }
      set {
        if (ModifierAttributes.Dexterity != value) {
          ModifierAttributes.Dexterity = value;
          ModifierAttributeChanged?.Invoke(this, CreatureAttributeType.Dexterity, value);
        }
      }
    }
    public int ModifierIntelligence {
      get { return ModifierAttributes.Intelligence; }
      set {
        if (ModifierAttributes.Intelligence != value) {
          ModifierAttributes.Intelligence = value;
          ModifierAttributeChanged?.Invoke(this, CreatureAttributeType.Intelligence, value);
        }
      }
    }
    public int ModifierMovementSpeed {
      get { return ModifierAttributes.MovementSpeed; }
      set {
        if (ModifierAttributes.MovementSpeed != value) {
          ModifierAttributes.MovementSpeed = value;
          ModifierAttributeChanged?.Invoke(this, CreatureAttributeType.MovementSpeed, value);
        }
      }
    }
    public int ModifierStength {
      get { return ModifierAttributes.Strength; }
      set {
        if (ModifierAttributes.Strength != value) {
          ModifierAttributes.Strength = value;
          ModifierAttributeChanged?.Invoke(this, CreatureAttributeType.Strength, value);
        }
      }
    }
    public int ModifierWisdom {
      get { return ModifierAttributes.Wisdom; }
      set {
        if (ModifierAttributes.Wisdom != value) {
          ModifierAttributes.Wisdom = value;
          ModifierAttributeChanged?.Invoke(this, CreatureAttributeType.Wisdom, value);
        }
      }
    }

    public int Strength {
      get {
        return BaseAttributes.Strength + Race.Attributes.Strength + ModifierAttributes.Strength;
      }
    }
    public int Dexterity {
      get {
        return BaseAttributes.Dexterity + Race.Attributes.Dexterity + ModifierAttributes.Dexterity;
      }
    }
    public int Constitution {
      get {
        return BaseAttributes.Constitution + Race.Attributes.Constitution + ModifierAttributes.Constitution;
      }
    }
    public int Wisdom {
      get {
        return BaseAttributes.Wisdom + Race.Attributes.Wisdom + ModifierAttributes.Wisdom;
      }
    }
    public int Intelligence {
      get {
        return BaseAttributes.Intelligence + Race.Attributes.Intelligence + ModifierAttributes.Intelligence;
      }
    }
    public int Charisma {
      get {
        return BaseAttributes.Charisma + Race.Attributes.Charisma + ModifierAttributes.Charisma;
      }
    }
    public int AttackSpeed {
      get {
        return BaseAttributes.AttackSpeed + Race.Attributes.AttackSpeed + ModifierAttributes.AttackSpeed;
      }
    }
    public int MovementSpeed {
      get {
        return BaseAttributes.MovementSpeed + Race.Attributes.MovementSpeed + ModifierAttributes.MovementSpeed;
      }
    }

    public override void Update(GameTime gameTime) {
      base.Update(gameTime);

      float elapsed = gameTime.ElapsedGameTime.Milliseconds;
      float adjustedTime = elapsed * MovementSpeed;

      float animationTime = adjustedTime * .375f;
      float velocityModifier = adjustedTime * .02f;

      Position += Velocity * velocityModifier;
      Animations.Update(animationTime);
    }

    public Creature(Game game) : base(game) { }
  }
}
