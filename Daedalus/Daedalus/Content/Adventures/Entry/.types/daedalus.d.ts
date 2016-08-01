declare class Log {
  public static WriteLine(line: string, ...args: Array<any>);
}

declare const Content: DynamicContentManager;
declare const GameObject: Game;

// Random
declare function d2(): number;
declare function d3(): number;
declare function d4(): number;
declare function d6(): number;
declare function d8(): number;
declare function d10(): number;
declare function d20(): number;
declare function d100(): number;
declare function randomFloat(): number;
declare function randomInt(min: number, max: number): number;

// Daedalus.Core
declare interface INameableObject {
  Name;
  Description;
}

// Daedalus.Core.Animations
declare class AnimationFrame {
  constructor();

  public Duration: number;
  public Box: Rectangle;
  public Origin: Vector2;
}
declare class Animation {
  public Finished: ClearScriptEvent<System.EventArgs>;
  public Started: ClearScriptEvent<System.EventArgs>;

  public ActiveFrame: AnimationFrame;
  public Duration: number;
  public Name: string;
  public Texture: Texture2D;
  public CollisionTexture: Texture2D;
  public CollisionMap: System.Array<Color>;
  public Frames: System.List<AnimationFrame>;
  public Repetitions: number;
  public Enabled: boolean;

  public Start(): void;
  public Stop(): void;
  public Resume(): void;

  public GenerateCollisionMap();

  constructor(name: string);
}
declare class AnimationController {
  public AnimationFinished: ClearScriptEvent<System.EventArgs>;
  public AnimationStarted: ClearScriptEvent<System.EventArgs>;

  public Animations: System.Dictionary<string, Animation>;
  public Enabled: boolean;
  public StartAnimation(name: string): void;
  public StopAnimation(): void;
  public AddAnimation(animation: Animation): void;

  constructor();
}

// Daedalus.Core.Content
declare class DynamicContentManager {
  public LoadTexture2D(path: string): Texture2D;
  public LoadSoundEffect(path: string): SoundEffect;
}

// Daedalus.Core.Creatures
declare class CreatureAttributeChangedEventArgs {
  // TODO: This is a wip
}
declare class Creature extends Sprite {
  public BaseAttributeChanged: ClearScriptEvent<CreatureAttributeChangedEventArgs>;
  public ModifierAttributeChanged: ClearScriptEvent<CreatureAttributeChangedEventArgs>;

  public Velocity: Vector2;
  public FirstName: string;
  public LastName: string;
  public Gender: CreatureGender;

  public Animations: AnimationController;
  public Race: CreatureRace;
  public BaseAttributes: CreatureAttributes;
  public BaseAttackSpeed: number;
  public BaseCharisma: number;
  public BaseConstitution: number;
  public BaseDexterity: number;
  public BaseIntelligence: number;
  public BaseMovementSpeed: number;
  public BaseStrength: number;
  public BaseWisdom: number;

  public ModifierAttributes: CreatureAttributes;
  public ModifierAttackSpeed: number;
  public ModifierCharisma: number;
  public ModifierConstitution: number;
  public ModifierDexterity: number;
  public ModifierIntelligence: number;
  public ModifierMovementSpeed: number;
  public ModifierStrength: number;
  public ModifierWisdom: number;

  public Strength: number;
  public Dexterity: number;
  public Constitution: number;
  public Wisdom: number;
  public Intelligence: number;
  public Charisma: number;
  public AttackSpeed: number;
  public MovementSpeed: number;

  constructor(game: Game);
}
declare class CreatureAttributes {
  public Strength: number;
  public Dexterity: number;
  public Constitution: number;
  public Wisdom: number;
  public Intelligence: number;
  public Charisma: number;
  public AttackSpeed: number;
  public MovementSpeed: number;
}
declare enum CreatureGender {
  Male,
  Female,
  Both,
  Other,
  None
}
declare class CreatureRace implements INameableObject {
  public Attributes: CreatureAttributes;
  public Name: string;
  public Description: string;
}

// Daedalus.Core.Sprites
declare class Sprite extends GameComponent implements INameableObject{
  public Texture: Texture2D;
  public CollisionTexture: Texture2D;
  public Frame: Rectangle;
  public Origin: Vector2;

  public Name: string;
  public Description: string;

  public GetColors(frame: Rectangle): System.Array<Color>;
  public GetWorldMatrix(): Matrix;
  public CheckCollision(b: Sprite): Vector2;

  public Color: Color;
  public Rotation: number;
  public Effects: SpriteEffects;
  public Depth: number;
  public Position: Vector2;
  public Scale: Vector2;
}