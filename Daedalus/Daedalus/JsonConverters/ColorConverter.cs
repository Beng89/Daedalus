using Microsoft.Xna.Framework;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;

namespace Daedalus.JsonConverters {
  class ColorConverter : JsonConverter {
    public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer) {
      Color color = (Color)value;

      int r = (int)color.R;
      int g = (int)color.G;
      int b = (int)color.B;
      int a = (int)color.A;

      JObject o = JObject.FromObject(new { r, g, b, a });

      o.WriteTo(writer);
    }

    public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer) {
      JObject o = JObject.Load(reader);

      int r = GetTokenValue(o, "r") ?? 0;
      int g = GetTokenValue(o, "g") ?? 0;
      int b = GetTokenValue(o, "b") ?? 0;
      int a = GetTokenValue(o, "a") ?? 255;

      return new Color(r, g, b, a);
    }

    public override bool CanConvert(Type objectType) {
      throw new NotImplementedException();
    }

    private static int? GetTokenValue(JObject o, string tokenName) {
      JToken t;
      return o.TryGetValue(tokenName, StringComparison.InvariantCultureIgnoreCase, out t) ? (int)t : (int?)null;
    }
  }
}
