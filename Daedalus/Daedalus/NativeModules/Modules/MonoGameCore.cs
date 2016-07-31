using Daedalus.Scripting;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Audio;
using Microsoft.Xna.Framework.Graphics;
using System;

namespace Daedalus.NativeModules.Modules {
  public class MonoGameCore : NativeModule {
    private static EngineRegistrationFunction _register = engine => {
      // System
      engine.AddHostType("System.TimeSpan", typeof(TimeSpan));
      engine.AddHostType("System.EventArgs", typeof(EventArgs));

      // Microsoft.Xna.Framework
      engine.AddHostType("BoundingBox", typeof(BoundingBox));
      engine.AddHostType("BoundingFrustum", typeof(BoundingFrustum));
      engine.AddHostType("BoundingSphere", typeof(BoundingSphere));
      engine.AddHostType("Color", typeof(Color));
      engine.AddHostType("ContainmentType", typeof(ContainmentType));
      engine.AddHostType("Curve", typeof(Curve));
      engine.AddHostType("CurveContinuity", typeof(CurveContinuity));
      engine.AddHostType("CurveKey", typeof(CurveKey));
      engine.AddHostType("CurveKeyCollection", typeof(CurveKeyCollection));
      engine.AddHostType("CurveLoopType", typeof(CurveLoopType));
      engine.AddHostType("CurveTangent", typeof(CurveTangent));
      engine.AddHostType("DisplayOrientation", typeof(DisplayOrientation));
      engine.AddHostType("GameComponentCollection", typeof(GameComponentCollection));
      engine.AddHostType("GameRunBehavior", typeof(GameRunBehavior));
      engine.AddHostType("GameTime", typeof(GameTime));
      engine.AddHostType("MathHelper", typeof(MathHelper));
      engine.AddHostType("Matrix", typeof(Matrix));
      engine.AddHostType("Plane", typeof(Plane));
      engine.AddHostType("PlaneIntersectionType", typeof(PlaneIntersectionType));
      engine.AddHostType("PlayerIndex", typeof(PlayerIndex));
      engine.AddHostType("Point", typeof(Point));
      engine.AddHostType("Quaternion", typeof(Quaternion));
      engine.AddHostType("Ray", typeof(Ray));
      engine.AddHostType("Rectangle", typeof(Rectangle));
      engine.AddHostType("TextInputEventArgs", typeof(TextInputEventArgs));
      engine.AddHostType("Vector2", typeof(Vector2));
      engine.AddHostType("Vector3", typeof(Vector3));
      engine.AddHostType("Vector4", typeof(Vector4));
      
      // Microsoft.Xna.Framework.Graphics
      //engine.AddHostType("Texture2D", typeof(Texture2D)); // should not be created in JS land

      // Microsoft.Xna.Framework.Audio
      //engine.AddHostType("SoundEffect", typeof(SoundEffect)); // should not be created in JS land
      engine.AddHostType("SoundState", typeof(SoundState));
    };
    public MonoGameCore() : base() {
      RegistrationFunction = _register;
    }
  }
}
