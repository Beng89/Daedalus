const texture = require("../../Textures/index.js").femaleMage;
const creature = new Creature(GameObject);
creature.Name = "Female-Mage";
creature.Description = "A female mage";
creature.Position = Vector2.Zero;

exports.creature = creature;

// Moving - Down
const animation_MoveDown = new Animation("Move-Down");
animation_MoveDown.Texture = texture;
creature.Animations.AddAnimation(animation_MoveDown);

const animation_MoveDown_1 = new AnimationFrame();
animation_MoveDown_1.Duration = 200;
animation_MoveDown_1.Origin = new Vector2(14, 34);
animation_MoveDown_1.Box = new Rectangle(0, 70, 28, 34);
animation_MoveDown.Frames.Add(animation_MoveDown_1);
const animation_MoveDown_2 = new AnimationFrame();
animation_MoveDown_2.Duration = 200;
animation_MoveDown_2.Origin = new Vector2(14, 34);
animation_MoveDown_2.Box = new Rectangle(29, 70, 28, 34);
animation_MoveDown.Frames.Add(animation_MoveDown_2);
const animation_MoveDown_3 = new AnimationFrame();
animation_MoveDown_3.Duration = 200;
animation_MoveDown_3.Origin = new Vector2(14, 34);
animation_MoveDown_3.Box = new Rectangle(58, 70, 28, 34);
animation_MoveDown.Frames.Add(animation_MoveDown_3);
const animation_MoveDown_4 = new AnimationFrame();
animation_MoveDown_4.Duration = 200;
animation_MoveDown_4.Origin = new Vector2(14, 34);
animation_MoveDown_4.Box = new Rectangle(29, 70, 28, 34);
animation_MoveDown.Frames.Add(animation_MoveDown_4);

// Moving - Left
const animation_MoveLeft = new Animation("Move-Left");
animation_MoveLeft.Texture = texture;
creature.Animations.AddAnimation(animation_MoveLeft);

const animation_MoveLeft_1 = new AnimationFrame();
animation_MoveLeft_1.Duration = 200;
animation_MoveLeft_1.Origin = new Vector2(14, 34);
animation_MoveLeft_1.Box = new Rectangle(0, 105, 28, 34);
animation_MoveLeft.Frames.Add(animation_MoveLeft_1);
const animation_MoveLeft_2 = new AnimationFrame();
animation_MoveLeft_2.Duration = 200;
animation_MoveLeft_2.Origin = new Vector2(14, 34);
animation_MoveLeft_2.Box = new Rectangle(29, 105, 28, 34);
animation_MoveLeft.Frames.Add(animation_MoveLeft_2);
const animation_MoveLeft_3 = new AnimationFrame();
animation_MoveLeft_3.Duration = 200;
animation_MoveLeft_3.Origin = new Vector2(14, 34);
animation_MoveLeft_3.Box = new Rectangle(58, 105, 28, 34);
animation_MoveLeft.Frames.Add(animation_MoveLeft_3);
const animation_MoveLeft_4 = new AnimationFrame();
animation_MoveLeft_4.Duration = 200;
animation_MoveLeft_4.Origin = new Vector2(14, 34);
animation_MoveLeft_4.Box = new Rectangle(29, 105, 28, 34);
animation_MoveLeft.Frames.Add(animation_MoveLeft_4);

// Moving - Right
const animation_MoveRight = new Animation("Move-Right");
animation_MoveRight.Texture = texture;
creature.Animations.AddAnimation(animation_MoveRight);

const animation_MoveRight_1 = new AnimationFrame();
animation_MoveRight_1.Duration = 200;
animation_MoveRight_1.Origin = new Vector2(14, 34);
animation_MoveRight_1.Box = new Rectangle(0, 35, 28, 34);
animation_MoveRight.Frames.Add(animation_MoveRight_1);
const animation_MoveRight_2 = new AnimationFrame();
animation_MoveRight_2.Duration = 200;
animation_MoveRight_2.Origin = new Vector2(14, 34);
animation_MoveRight_2.Box = new Rectangle(29, 35, 28, 34);
animation_MoveRight.Frames.Add(animation_MoveRight_2);
const animation_MoveRight_3 = new AnimationFrame();
animation_MoveRight_3.Duration = 200;
animation_MoveRight_3.Origin = new Vector2(14, 34);
animation_MoveRight_3.Box = new Rectangle(58, 35, 28, 34);
animation_MoveRight.Frames.Add(animation_MoveRight_3);
const animation_MoveRight_4 = new AnimationFrame();
animation_MoveRight_4.Duration = 200;
animation_MoveRight_4.Origin = new Vector2(14, 34);
animation_MoveRight_4.Box = new Rectangle(29, 35, 28, 34);
animation_MoveRight.Frames.Add(animation_MoveRight_4);

// Moving - Up
const animation_MoveUp = new Animation("Move-Up");
animation_MoveUp.Texture = texture;
creature.Animations.AddAnimation(animation_MoveUp);

const animation_MoveUp_1 = new AnimationFrame();
animation_MoveUp_1.Duration = 200;
animation_MoveUp_1.Origin = new Vector2(14, 34);
animation_MoveUp_1.Box = new Rectangle(0, 0, 28, 34);
animation_MoveUp.Frames.Add(animation_MoveUp_1);
const animation_MoveUp_2 = new AnimationFrame();
animation_MoveUp_2.Duration = 200;
animation_MoveUp_2.Origin = new Vector2(14, 34);
animation_MoveUp_2.Box = new Rectangle(29, 0, 28, 34);
animation_MoveUp.Frames.Add(animation_MoveUp_2);
const animation_MoveUp_3 = new AnimationFrame();
animation_MoveUp_3.Duration = 200;
animation_MoveUp_3.Origin = new Vector2(14, 34);
animation_MoveUp_3.Box = new Rectangle(58, 0, 28, 34);
animation_MoveUp.Frames.Add(animation_MoveUp_3);
const animation_MoveUp_4 = new AnimationFrame();
animation_MoveUp_4.Duration = 200;
animation_MoveUp_4.Origin = new Vector2(14, 34);
animation_MoveUp_4.Box = new Rectangle(29, 0, 28, 34);
animation_MoveUp.Frames.Add(animation_MoveUp_4);

// Standing - Down
const animation_StandDown = new Animation("Stand-Down");
animation_StandDown.Texture = texture;
creature.Animations.AddAnimation(animation_StandDown);
const animation_StandDown_1 = new AnimationFrame();
animation_StandDown_1.Duration = 33;
animation_StandDown_1.Origin = new Vector2(14, 34);
animation_StandDown_1.Box = new Rectangle(29, 70, 28, 34);
animation_StandDown.Frames.Add(animation_StandDown_1);

// Standing - Left
const animation_StandLeft = new Animation("Stand-Left");
animation_StandLeft.Texture = texture;
creature.Animations.AddAnimation(animation_StandLeft);
const animation_StandLeft_1 = new AnimationFrame();
animation_StandLeft_1.Duration = 33;
animation_StandLeft_1.Origin = new Vector2(14, 34);
animation_StandLeft_1.Box = new Rectangle(29, 105, 28, 34);
animation_StandLeft.Frames.Add(animation_StandLeft_1);

// Standing - Right
const animation_StandRight = new Animation("Stand-Right");
animation_StandRight.Texture = texture;
creature.Animations.AddAnimation(animation_StandRight);
const animation_StandRight_1 = new AnimationFrame();
animation_StandRight_1.Duration = 33;
animation_StandRight_1.Origin = new Vector2(14, 34);
animation_StandRight_1.Box = new Rectangle(29, 35, 28, 34);
animation_StandRight.Frames.Add(animation_StandRight_1);

// Standing - Up
const animation_StandUp = new Animation("Stand-Up");
animation_StandUp.Texture = texture;
creature.Animations.AddAnimation(animation_StandUp);
const animation_StandUp_1 = new AnimationFrame();
animation_StandUp_1.Duration = 33;
animation_StandUp_1.Origin = new Vector2(14, 34);
animation_StandUp_1.Box = new Rectangle(29, 0, 28, 34);
animation_StandUp.Frames.Add(animation_StandUp_1);