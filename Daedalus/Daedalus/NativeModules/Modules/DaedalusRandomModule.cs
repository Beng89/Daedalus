using Microsoft.ClearScript.V8;
using System;

namespace Daedalus.NativeModules.Modules {
  public class DaedalusRandomModule : NativeModule {
    public delegate int DieFunction();
    public delegate int RandomIntFunction(int min, int max);
    public delegate float RandomFloatFunction();

    private static Random _source = new Random();

    public static readonly RandomFloatFunction randomFloat = () => (float)_source.NextDouble();
    public static readonly RandomIntFunction randomInt = (int min, int max) => _source.Next(min, max);

    public static readonly DieFunction d2 = () => _source.Next(1, 3);
    public static readonly DieFunction d3 = () => _source.Next(1, 4);
    public static readonly DieFunction d4 = () => _source.Next(1, 5);
    public static readonly DieFunction d6 = () => _source.Next(1, 7);
    public static readonly DieFunction d8 = () => _source.Next(1, 9);
    public static readonly DieFunction d10 = () => _source.Next(1, 11);
    public static readonly DieFunction d20 = () => _source.Next(1, 21);
    public static readonly DieFunction d100 = () => _source.Next(1, 101);

    public DaedalusRandomModule() : base() { }

    public override void Register(V8ScriptEngine engine) {
      engine.AddHostObject("d2", d2);
      engine.AddHostObject("d3", d3);
      engine.AddHostObject("d4", d4);
      engine.AddHostObject("d6", d6);
      engine.AddHostObject("d8", d8);
      engine.AddHostObject("d10", d10);
      engine.AddHostObject("d20", d20);
      engine.AddHostObject("d100", d100);
      engine.AddHostObject("randomFloat", randomFloat);
      engine.AddHostObject("randomInt", randomInt);
    }
  }
}
