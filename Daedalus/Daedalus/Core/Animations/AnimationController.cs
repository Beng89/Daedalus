using System;
using System.Collections.Generic;

namespace Daedalus.Core.Animations {
  public class AnimationController {
    public event EventHandler<EventArgs> AnimationFinished;
    public event EventHandler<EventArgs> AnimationStarted;

    public readonly Dictionary<string, Animation> Animations;
    public Animation ActiveAnimation { get; private set; }
    public bool Enabled { get; private set; }

    public void StartAnimation(string name) {
      ActiveAnimation?.Stop();

      if (Animations.ContainsKey(name)) {
        Animations[name].Start();
      }
    }
    public void StopAnimation() {
      ActiveAnimation?.Stop();
    }
    public void AddAnimation(Animation animation) {
      animation.Finished += _animationFinishedHandler;
      animation.Started += _animationStartedHandler;

      Animations.Add(animation.Name, animation);
    }

    private void _animationFinishedHandler(object sender, EventArgs e) {
      Animation animation = sender as Animation;
      if (animation != null && ActiveAnimation == animation) {
        AnimationFinished?.Invoke(this, EventArgs.Empty);
        Enabled = false;
      }
    }
    private void _animationStartedHandler(object sender, EventArgs e) {
      Animation animation = sender as Animation;
      if (animation != null) {
        if (ActiveAnimation != null) {
          if (ActiveAnimation == animation) {
            return;
          }
          ActiveAnimation.Stop();
        }

        ActiveAnimation = animation;
        Enabled = true;
        AnimationStarted?.Invoke(this, EventArgs.Empty);
      }
    }

    public void Update(float elapsed) {
      if (ActiveAnimation != null && ActiveAnimation.Enabled) {
        ActiveAnimation.Update(elapsed);
      }
    }
    public AnimationController() {
      Animations = new Dictionary<string, Animation>();
    }
  }
}
