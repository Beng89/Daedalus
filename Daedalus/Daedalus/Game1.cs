using Daedalus.Core;
using Daedalus.NativeModules;
using Daedalus.NativeModules.Modules;
using Daedalus.Scripting;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;
using Microsoft.Xna.Framework.Input;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Daedalus {
  /// <summary>
  /// This is the main type for your game.
  /// </summary>
  public class Game1 : Game {
    private GraphicsDeviceManager _graphics;
    private SpriteBatch _spriteBatch;
    private ModuleHost _host;
    private ObservableCollection<EngineRegistrationFunction> _registrations = new ObservableCollection<EngineRegistrationFunction>();

    // this is temporary (for dinking around).
    private List<Texture2D> sprites = new List<Texture2D>();

    public Game1() {
      // Content isn't really being used, so we can probably remove this line at some point
      Content.RootDirectory = "Content";

      _graphics = new GraphicsDeviceManager(this);
      _host = new ModuleHost("Content/Adventures/Entry", _registrations);

      IsMouseVisible = true;
    }

    /// <summary>
    /// Allows the game to perform any initialization it needs to before starting to run.
    /// This is where it can query for any required services and load any non-graphic
    /// related content.  Calling base.Initialize will enumerate through any components
    /// and initialize them as well.
    /// </summary>
    protected override void Initialize() {
      // Create modules
      var _randomModule = new DaedalusRandomFunctions();
      var _contentModule = new DynamicContent(GraphicsDevice);
      var _monoGameCoreModule = new MonoGameCore();

      // initialize modules
      _randomModule.Initialize(_registrations);
      _contentModule.Initialize(_registrations);
      _monoGameCoreModule.Initialize(_registrations);

      // this is temporary for dinking around
      _host.Engine.AddHostObject("sprites", sprites);

      // Important! 
      // finish all initialization before calling base.initialize();
      // base.Initialize will call LoadContent, which could mean null references
      base.Initialize();
    }

    /// <summary>
    /// LoadContent will be called once per game and is the place to load
    /// all of your content.
    /// </summary>
    protected override void LoadContent() {
      // Create a new SpriteBatch, which can be used to draw textures.
      // this will probably be removed at some point
      _spriteBatch = new SpriteBatch(GraphicsDevice);

      // Load up the main entry point for this host
      _host.Require("main.js");
    }

    /// <summary>
    /// UnloadContent will be called once per game and is the place to unload
    /// game-specific content.
    /// </summary>
    protected override void UnloadContent() {
      // Dispose of the host, otherwise we may leak memory from the javascript engine
      _host.Dispose();
    }

    /// <summary>
    /// Allows the game to run logic such as updating the world,
    /// checking for collisions, gathering input, and playing audio.
    /// </summary>
    /// <param name="gameTime">Provides a snapshot of timing values.</param>
    protected override void Update(GameTime gameTime) {
      if (GamePad.GetState(PlayerIndex.One).Buttons.Back == ButtonState.Pressed || Keyboard.GetState().IsKeyDown(Keys.Escape))
        Exit();

      // TODO: Add your update logic here

      base.Update(gameTime);
    }

    /// <summary>
    /// This is called when the game should draw itself.
    /// </summary>
    /// <param name="gameTime">Provides a snapshot of timing values.</param>
    protected override void Draw(GameTime gameTime) {
      GraphicsDevice.Clear(Color.TransparentBlack);

      // TODO: Add your drawing code here
      _spriteBatch.Begin();

      // woo draw
      sprites.ForEach(sprite => {
        _spriteBatch.Draw(sprite, Vector2.Zero, Color.White);
      });

      _spriteBatch.End();

      base.Draw(gameTime);
    }
  }
}
