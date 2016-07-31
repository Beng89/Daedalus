Log.WriteLine("Generating some random numbers");

// this is not natively supported, sooo...
// setTimeout(() => {
//   Log.WriteLine("woo the timeout was awesome.");
// }, 3000);

for(let i = 0; i < 100; i++) {
  Log.WriteLine("-> {0} = {1}", i, d100());
}

Log.WriteLine("Done generating some random numbers");

test();

exports.healerTexture = Content.LoadTexture2D(__dirname + "/images/healer_f.png");
exports.healerTexture2 = Content.LoadTexture2D(__dirname + "/images/healer_f.png");

var texture = Content.LoadTexture2D(__dirname + "/images/healer_f.png");
Log.WriteLine("Sound State?: {0}", SoundState.Playing);
sprites.Add(texture);