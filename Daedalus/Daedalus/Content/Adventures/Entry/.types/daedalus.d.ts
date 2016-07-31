declare class Log {
  public static WriteLine(line: string, ...args: Array<any>);
}

declare function d2(): number;
declare function d3(): number;
declare function d4(): number;
declare function d6(): number;
declare function d8(): number;
declare function d10(): number;
declare function d20(): number;
declare function d100(): number;
declare function randomFloat(): number;
declare function randomInt(min: number, max: number): number;

declare class DynamicContentManager {
  public LoadTexture2D(path: string): Texture2D;
  public LoadSoundEffect(path: string): SoundEffect;
}

declare const Content: DynamicContentManager;