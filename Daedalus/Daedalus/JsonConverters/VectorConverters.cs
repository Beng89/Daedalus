using Microsoft.Xna.Framework;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;

namespace Daedalus.JsonConverters {
  public class Vector2Converter : JsonConverter {
    public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer) {
      var vector = (Vector2)value;

      var x = vector.X;
      var y = vector.Y;

      var o = JObject.FromObject(new { x, y });

      o.WriteTo(writer);
    }
    public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer) {
      var o = JObject.Load(reader);

      var x = GetTokenValue(o, "x") ?? 0;
      var y = GetTokenValue(o, "y") ?? 0;

      return new Vector2(x, y);
    }

    public override bool CanConvert(Type objectType) {
      throw new NotImplementedException();
    }

    private static float? GetTokenValue(JObject o, string tokenName) {
      JToken t;
      return o.TryGetValue(tokenName, StringComparison.InvariantCultureIgnoreCase, out t) ? (float)t : (float?)null;
    }
  }
  public class Vector3Converter : JsonConverter {
    public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer) {
      var vector = (Vector3)value;

      var x = vector.X;
      var y = vector.Y;
      var z = vector.Z;

      var o = JObject.FromObject(new { x, y, z });

      o.WriteTo(writer);
    }
    public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer) {
      var o = JObject.Load(reader);

      var x = GetTokenValue(o, "x") ?? 0;
      var y = GetTokenValue(o, "y") ?? 0;
      var z = GetTokenValue(o, "z") ?? 0;

      return new Vector3(x, y, z);
    }

    public override bool CanConvert(Type objectType) {
      throw new NotImplementedException();
    }

    private static float? GetTokenValue(JObject o, string tokenName) {
      JToken t;
      return o.TryGetValue(tokenName, StringComparison.InvariantCultureIgnoreCase, out t) ? (float)t : (float?)null;
    }
  }
  public class Vector4Converter : JsonConverter {
    public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer) {
      var vector = (Vector4)value;

      var x = vector.X;
      var y = vector.Y;
      var z = vector.Z;
      var w = vector.W;

      var o = JObject.FromObject(new { x, y, z, w });

      o.WriteTo(writer);
    }
    public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer) {
      var o = JObject.Load(reader);

      var x = GetTokenValue(o, "x") ?? 0;
      var y = GetTokenValue(o, "y") ?? 0;
      var z = GetTokenValue(o, "z") ?? 0;
      var w = GetTokenValue(o, "w") ?? 0;

      return new Vector4(x, y, z, w);
    }

    public override bool CanConvert(Type objectType) {
      throw new NotImplementedException();
    }

    private static float? GetTokenValue(JObject o, string tokenName) {
      JToken t;
      return o.TryGetValue(tokenName, StringComparison.InvariantCultureIgnoreCase, out t) ? (float)t : (float?)null;
    }
  }
}
