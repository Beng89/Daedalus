var healer = require("./Creatures/Female/Healer.js").creature;
healer.Position = new Vector2(0, 50);
GameObject.Components.Add(healer);
healer.Animations.StartAnimation("Move-Right");
healer.Velocity = Vector2.UnitX;
healer.ModifierMovementSpeed = 3;

var mage = require("./Creatures/Female/Mage.js").creature;
mage.Position = new Vector2(0, 90);
GameObject.Components.Add(mage);
mage.Animations.StartAnimation("Move-Right");
mage.Velocity = Vector2.UnitX;

var ninja = require("./Creatures/Female/Ninja.js").creature;
ninja.Position = new Vector2(0, 130);
GameObject.Components.Add(ninja);
ninja.Animations.StartAnimation("Move-Right");
ninja.Velocity = Vector2.UnitX;

var ranger = require("./Creatures/Female/Ranger.js").creature;
ranger.Position = new Vector2(0, 170);
GameObject.Components.Add(ranger);
ranger.Animations.StartAnimation("Move-Right");
ranger.Velocity = Vector2.UnitX;

var townfolk = require("./Creatures/Female/Townfolk.js").creature;
townfolk.Position = new Vector2(0, 210);
GameObject.Components.Add(townfolk);
townfolk.Animations.StartAnimation("Move-Right");
townfolk.Velocity = Vector2.UnitX;

var warrior = require("./Creatures/Female/Warrior.js").creature;
warrior.Position = new Vector2(0, 250);
GameObject.Components.Add(warrior);
warrior.Animations.StartAnimation("Move-Right");
warrior.Velocity = Vector2.UnitX;

function checkCreaturePosition(creature, width) {
  let flipA = (creature.Velocity.X > 0 && creature.Position.X + creature.Origin.X > width)
  let flipB = (creature.Velocity.X < 0 && creature.Position.X - creature.Origin.X < 0);
  if(flipA || flipB) {
    creature.Velocity = Vector2.Multiply(creature.Velocity, Vector2.Multiply(Vector2.UnitX, -1));

    if(flipA) {
      creature.Animations.StartAnimation("Move-Left");
    }
    else {
      creature.Animations.StartAnimation("Move-Right");
    }
  }
}

var x = 3;
var test = new SimpleGameComponent(GameObject);
test.UpdateFunction = new SimpleUpdateFunction((time) => {
  var width = GameObject.GraphicsDevice.Viewport.Width;

  checkCreaturePosition(healer, width);
  checkCreaturePosition(mage, width);
  checkCreaturePosition(ninja, width);
  checkCreaturePosition(ranger, width);
  checkCreaturePosition(townfolk, width);
  checkCreaturePosition(warrior, width);
});

GameObject.Components.Add(test);