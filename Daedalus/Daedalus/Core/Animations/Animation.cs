using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Content;
using Microsoft.Xna.Framework.Graphics;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Daedalus.Core.Animations {
  public sealed class Animation {
    // TODO: Test this.
    private static Color[,] _generateCollisionMap(Texture2D texture) {
      Color[,] color2d = new Color[texture.Width, texture.Height];

      Color[] color1d = new Color[texture.Width * texture.Height];
      texture.GetData(color1d);

      for (int x = 0; x < texture.Width; x++) {
        for (int y = 0; y < texture.Height; y++) {
          color2d[x, y] = color1d[x + y * texture.Width];
        }
      }

      return color2d;
    }

    public event EventHandler<EventArgs> Finished;
    public event EventHandler<EventArgs> Started;

    private float _elapsed = 0.0f;
    private float _currentLap;
    private int _activeFrameIndex;

    public AnimationFrame ActiveFrame {
      get {
        return Frames[_activeFrameIndex];
      }
    }
    public float Duration {
      get {
        float duration = 0;
        foreach (var frame in Frames) {
          duration += frame.Duration;
        }
        return duration;
      }
    }
    public string Name;
    public Texture2D Texture;
    public Texture2D collisionTexture;
    public Color[] CollisionMap;
    public List<AnimationFrame> Frames;
    public float Repetitions;
    public bool Enabled;

    public void Start() {
      Enabled = true;

      _activeFrameIndex = 0;
      _elapsed = 0;
      _currentLap = 0;

      Started?.Invoke(this, EventArgs.Empty);
    }
    public void Stop() {
      Enabled = false;
    }
    public void Resume() {
      Enabled = true;
    }

    public void Update(float milliseconds) {
      _elapsed += milliseconds;

      // Guarantee that the frames will be synchronized with the timing
      // Ie. Skip frames when necessary
      while (_currentLap < Repetitions && _elapsed > Frames[_activeFrameIndex].Duration) {
        _elapsed -= Frames[_activeFrameIndex].Duration;
        _activeFrameIndex++;

        // If we have reached the end of the frames, lap.
        if (_activeFrameIndex >= Frames.Count) {
          _activeFrameIndex = 0;
          _currentLap++;
        }
      }

      if (_currentLap >= Repetitions) {
        Enabled = false;
        Finished?.Invoke(this, EventArgs.Empty);
      }
    }

    public Animation(string name) {
      Name = name;

      Frames = new List<AnimationFrame>();
      Repetitions = float.PositiveInfinity;
      Enabled = true;
    }

    public void GenerateCollisionMap() {
      //CollisionMap = _generateCollisionMap(collisionTexture);
    }
  }
}
