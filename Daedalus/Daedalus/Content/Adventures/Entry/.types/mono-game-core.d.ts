// Microsoft.Xna.Framework

declare class BoundingBox {
  // Static Member(s)
  public static CreateFromPoints(points: System.Array<Vector3>): BoundingBox;
  public static CreateFromSphere(sphere: BoundingSphere): BoundingBox;
  public static CreateMerged(a: BoundingBox, b: BoundingBox): BoundingBox;

  // Constructor(s)
  constructor(min: Vector3, max: Vector3);

  // Instance Member(s)
  public Contains(b: BoundingBox): ContainmentType;
  public Contains(b: BoundingFrustum): ContainmentType;
  public Contains(b: BoundingSphere): ContainmentType;
  public Contains(b: Vector3): ContainmentType;
  public Equals(b: BoundingBox);
  public GetCorners(): System.Array<Vector3>;
  public Intersects(b: BoundingBox): boolean;
  public Intersects(b: BoundingFrustum): boolean;
  public Intersects(b: BoundingSphere): boolean;
  public Intersects(b: Plane): PlaneIntersectionType;
  public Intersects(b: Ray): number;
  public ToString(): string;

  public Max: Vector3;
  public Min: Vector3;
  public CornerCount: number;
}
declare class BoundingFrustum {
  // Static Member(s)

  // Constructor(s)
  constructor(matrix: Matrix);

  // Instance Member(s)
  public Contains(b: BoundingBox): ContainmentType;
  public Contains(b: BoundingFrustum): ContainmentType;
  public Contains(b: BoundingSphere): ContainmentType;
  public Contains(b: Vector3): ContainmentType;
  public Equals(b: BoundingFrustum);
  public GetCorners(): System.Array<Vector3>;
  public Intersects(b: BoundingBox): boolean;
  public Intersects(b: BoundingFrustum): boolean;
  public Intersects(b: BoundingSphere): boolean;
  public Intersects(b: Plane): PlaneIntersectionType;
  public Intersects(b: Ray): number;
  public ToString(): string;

  public Bottom: Plane;
  public Far: Plane;
  public Left: Plane;
  public Matrix: Matrix;
  public Near: Plane;
  public Right: Plane;
  public Top: Plane;
  public CornerCount: number;
  public PlaneCount: number;
}
declare class BoundingSphere {
  // Static Member(s)
  public static CreateFromPoints(points: System.Array<Vector3>): BoundingSphere;
  public static CreateFromBoundingBox(box: BoundingBox): BoundingSphere;
  public static CreateFromFrustum(frustum: BoundingFrustum): BoundingSphere;

  // Constructor(s)
  constructor(center: Vector3, radius: number);

  // Instance Member(s)
  public Contains(b: BoundingBox): ContainmentType;
  public Contains(b: BoundingFrustum): ContainmentType;
  public Contains(b: BoundingSphere): ContainmentType;
  public Contains(b: Vector3): ContainmentType;
  public Equals(b: BoundingSphere);
  public Intersects(b: BoundingBox): boolean;
  public Intersects(b: BoundingFrustum): boolean;
  public Intersects(b: BoundingSphere): boolean;
  public Intersects(b: Plane): PlaneIntersectionType;
  public Intersects(b: Ray): number;
  public ToString(): string;
  public Transform(matrix: Matrix): BoundingSphere;

  public Center: Vector3;
  public Radius: number;
}
declare class Color {
  // Static Member(s)
  public static FromNonPremultiplied(r: number, b: number, g: number, a: number): Color;
  public static Lerp(a: Color, b: Color, amount: number): Color;
  public static LerpPrecise(a: Color, b: Color, amount: number): Color;
  public static Multiply(color: Color, scale: number): Color;

  public static AliceBlue: Color;
  public static AntiqueWhite: Color;
  public static Aqua: Color;
  public static Aquamarine: Color;
  public static Azure: Color;
  public static Beige: Color;
  public static Bisque: Color;
  public static Black: Color;
  public static BlanchedAlmond: Color;
  public static Blue: Color;
  public static BlueViolet: Color;
  public static Brown: Color;
  public static BurlyWood: Color;
  public static CadetBlue: Color;
  public static Chartreuse: Color;
  public static Chocolate: Color;
  public static Coral: Color;
  public static CornflowerBlue: Color;
  public static Cornsilk: Color;
  public static Crimsom: Color;
  public static Cyan: Color;
  public static DarkBlue: Color;
  public static DarkCyan: Color;
  public static DarkGoldenrod: Color;
  public static DarkGray: Color;
  public static DarkGreen: Color;
  public static DarkKhaki: Color;
  public static DarkMagenta: Color;
  public static DarkOliveGreen: Color;
  public static DarkOrange: Color;
  public static DarkOrchid: Color;
  public static DarkRed: Color;
  public static DarkSalmon: Color;
  public static DarkSeaGreen: Color;
  public static DarkSlateBlue: Color;
  public static DarkSlateGray: Color;
  public static DarkTurquoise: Color
  public static DarkViolet: Color;
  public static DeepPink: Color;
  public static DeepSkyBlue: Color;
  public static DimGray: Color;
  public static DodgerBlue: Color;
  public static Firebrick: Color;
  public static FloralWhite: Color;
  public static ForestGreen: Color;
  public static Fuchsia: Color;
  public static Gainsboro: Color;
  public static GhostWhite: Color;
  public static Gold: Color;
  public static Goldenrod: Color;
  public static Gray: Color;
  public static Green: Color;
  public static GreenYellow: Color;
  public static Honeydew: Color;
  public static HotPink: Color;
  public static IndianRed: Color;
  public static Indigo: Color;
  public static Ivory: Color;
  public static Khaki: Color;
  public static Lavender: Color;
  public static LavenderBlush: Color;
  public static LawnGreen: Color;
  public static LemonChiffon: Color;
  public static LightBlue: Color;
  public static LightCoral: Color;
  public static LightCyan: Color;
  public static LightGoldenrodYellow: Color;
  public static LightGray: Color;
  public static LightGreen: Color;
  public static LightPink: Color;
  public static LightSalmon: Color;
  public static LightSeaGreen: Color;
  public static LightSkyBlue: Color;
  public static LightSlateGray: Color;
  public static LightSteelBlue: Color;
  public static LightYellow: Color;
  public static Lime: Color;
  public static LimeGreen: Color;
  public static Linen: Color;
  public static Magenta: Color;
  public static Maroon: Color;
  public static MediumAquamarine: Color;
  public static MediumBlue: Color;
  public static MediumOrchid: Color;
  public static MediumPurple: Color;
  public static MediumSeaGreen: Color;
  public static MediumSlateBlue: Color;  
  public static MediumSpringGreen: Color;
  public static MediumTurquoise: Color;
  public static MediumVioletRed: Color;
  public static MidnightBlue: Color;
  public static MintCream: Color;
  public static MistyRose: Color;
  public static Moccasin: Color;
  public static MonoGameOrange: Color;
  public static NavajoWhite: Color;
  public static Navy: Color;
  public static OldLace: Color;
  public static Olive: Color;
  public static OliveDrab: Color;
  public static Orchid: Color;
  public static PaleGoldenrod: Color;
  public static PaleGreen: Color;
  public static PaleTurquoise: Color;
  public static PaleVioletRed: Color;
  public static PapayaWhip: Color;
  public static PeachPuff: Color;
  public static Peru: Color;
  public static Pink: Color;
  public static Plum: Color;
  public static PowderBlue: Color;
  public static Purple: Color;
  public static Red: Color;
  public static RosyBrown: Color;
  public static RoyalBlue: Color;
  public static SaddleBrown: Color;
  public static Salmon: Color;
  public static SandyBrown: Color;
  public static SeaGreen: Color;
  public static SeaShell: Color;
  public static Sienna: Color;
  public static Silver: Color;
  public static SkyBlue: Color;
  public static SlateBlue: Color;
  public static SlateGray: Color;
  public static Snow: Color;
  public static SpringGreen: Color;
  public static SteelBlue: Color;
  public static Tan: Color;
  public static Teal: Color;
  public static Thistle: Color;
  public static Tomato: Color;
  public static Transparent: Color;
  public static TransparentBlack: Color;
  public static Turquoise: Color;
  public static Violet: Color;
  public static Wheat: Color;
  public static White: Color;
  public static WhiteSmoke: Color;
  public static Yellow: Color;
  public static YellowGreen: Color;

  // Constructor(s)
  constructor(r: number, b: number, g: number);
  constructor(r: number, b: number, g: number, alpha: number);
  constructor(color: Color, alpha: number);
  constructor(vec3: Vector3);
  constructor(vec4: Vector4);

  // Instance Member(s)
  public Equals(b: Color): boolean;
  public ToString(): string;
  public ToVector3(): Vector3;
  public ToVector4(): Vector4;

  public A: number;
  public B: number;
  public G: number;
  public R: number;

  public PackedValue: number;
}
declare enum ContainmentType {
  Contains,
  Disjoint,
  Intersects
}
declare class Curve {
  // Static Member(s)

  // Constructor(s)
  constructor();

  // Instance Method(s)
  public Clone(): Curve;
  public ComputeTangent(keyIndex: number, tangentType: CurveTangent): void;
  public ComputeTangent(keyIndex: number, tangentType: CurveTangent, outType: CurveTangent): void;
  public ComputeTangents(tangentType: CurveTangent): void;
  public ComputeTangents(tangentType: CurveTangent, outType: CurveTangent): void;
  public Evaluate(position: number): number;

  public IsConstant: boolean;
  public Keys: CurveKeyCollection;
  public PostLoop: CurveLoopType;
  public PreLoop: CurveLoopType;
}
declare enum CurveContinuity {
  Smooth,
  Step
}
declare class CurveKey {
  // Static Member(s)
  // Constructor(s)
  constructor();
  constructor(position: number, value: number);
  constructor(position: number, value: number, tangentIn: number, tangentOut: number);
  constructor(position: number, value: number, tangentIn: number, tangentOut: number, continuity: CurveContinuity);

  // Instance Method(s)
  public Clone(): CurveKey;
  public CompareTo(b: CurveKey): number;
  public Equals(b: CurveKey): boolean;

  public Continuity: CurveContinuity;
  public Position: number;
  public TangentIn: number;
  public TangentOut: number;
  public Value: number;
}
declare class CurveKeyCollection {
  // Static Member(s)
  // Constructor(s)
  constructor();

  // Instance Method(s)
  public Add(item: CurveKey): void;
  public Clear(): void;
  public Clone(): CurveKeyCollection;
  public Contains(key: CurveKey): boolean;
  public CopyTo(destination: System.Array<CurveKey>, i: number): void;
  public GetEnumerator(): any; // TODO: Fix this type
  public IndexOf(item: CurveKey): number;
  public Remove(item: CurveKey): boolean;
  public RemoveAt(i: number): void;

  public Count: number;
  public IsReadOnly: boolean;

  [ key: string ] : CurveKey | any;
}
declare enum CurveLoopType {
  Constant,
  Cycle,
  CycleOffset,
  Linear,
  Oscillate
}
declare enum CurveTangent {
  Flat,
  Linear,
  Smooth
}
declare enum DisplayOrientation {
  Default,
  LandscapeLeft,
  LandscapeRight,
  Portrait,
  PortraitDown,
  Unknown
}
declare class DrawableGameComponent extends GameComponent {
  Draw(gameTime: GameTime): void;
  LoadContent(): void;

  DrawOrder: number;
  GraphicsDevcice: GraphicsDevice;
  Visible: boolean;

  DrawOrderChagned: ClearScriptEvent<System.EventArgs>;
  VisibleChanged: ClearScriptEvent<System.EventArgs>;
}
declare class Game extends DrawableGameComponent {
  Exit(): void;
  RunOneFrame(): void;
  SuppressDraw(): void;
  Tick(): void;

  Components: GameComponentCollection;
  GraphicsDevcice: GraphicsDevice;
  IsActive: boolean;
  IsFixedTimeStep: boolean;
  IsMouseVisible: boolean;
  LaunchParameters: LaunchParameters;
  MaxElapsedTime: any; // todo: change this to System.TimeSpan
  TargetElapsedTime: any; // todo: Change this to System.TimeSpan
  Window: GameWindow;

  Activated: ClearScriptEvent<System.EventArgs>;
  Deactivated: ClearScriptEvent<System.EventArgs>;
  Disposed: ClearScriptEvent<System.EventArgs>;
  Exiting: ClearScriptEvent<System.EventArgs>;
}
declare class GameComponent {
  Initialize(): void;
  Update(gameTime: GameTime): void;

  Enabled: boolean;
  Game: Game;
  UpdateOrder: number;

  EnabledChanged: ClearScriptEvent<System.EventArgs>;
  UpdatedOrderChanged: ClearScriptEvent<System.EventArgs>;
}
declare class GameComponentCollection {
  public ClearItems(): void;

  constructor();

  public InsertItem(i: number, component: GameComponent): void;
  public RemoveItem(i: number): void;
  public SetItem(i: number, component: GameComponent): void;

  public ComponentAdded: ClearScriptEvent<GameComponentsCollectionEventArgs>;
  public ComponentRemoved: ClearScriptEvent<GameComponentsCollectionEventArgs>;

  public Count: number;
  public Items: System.List<GameComponent>;
  public Add(item: GameComponent): void;
  public Clear(): void;
  public Contains(item: GameComponent): boolean;
  public Add(item: GameComponent): void;
  public AddRange(collection: System.IEnumerable<GameComponent>): void;
  public AsReadOnly(): any; // is a ReadOnlyCollection
  public BinarySearch(item: GameComponent): number;
  public BinarySearch(item: GameComponent, comparer: System.IComparer<GameComponent>): number;
  public BinarySearch(i: number, count: number, item: GameComponent, comparer: System.IComparer<GameComponent>): number;
  public Clear(): void;
  public Contains(item: GameComponent): boolean;
  public CopyTo(array: Array<GameComponent>): void;
  public CopyTo(array: Array<GameComponent>, arrayIndex: number): void;
  public CopyTo(i: number, array: Array<GameComponent>, arrayIndex: number, count: number): void;
  public Exists(predicate: System.Predicate<GameComponent>): boolean;
  public Find(predicate: System.Predicate<GameComponent>): GameComponent;
  public FindAll(predicate: System.Predicate<GameComponent>): System.List<GameComponent>;
  public FindIndex(predicate: System.Predicate<GameComponent>): number;
  public FindIndex(i: number, predicate: System.Predicate<GameComponent>): number;
  public FindIndex(i: number, count: number, predicate: System.Predicate<GameComponent>): number;
  public FindLast(predicate: System.Predicate<GameComponent>): GameComponent;
  public FindLastIndex(predicate: System.Predicate<GameComponent>): GameComponent;
  public FindLastIndex(i: number, predicate: System.Predicate<GameComponent>): GameComponent;
  public FindLastIndex(i: number, count: number, predicate: System.Predicate<GameComponent>): GameComponent;
  public ForEach(action: System.Action<GameComponent>): void;
  public GetRange(i: number, count: number): System.List<GameComponent>;
  public IndexOf(item: GameComponent): number;
  public IndexOf(item: GameComponent, i: number): number;
  public IndexOf(item: GameComponent, i: number, count: number): number;
  public Insert(i: number, item: GameComponent): void;
  public InsertRange(i: number, items: System.IEnumerable<GameComponent>): void;
  public LastIndexOf(item: GameComponent): number;
  public LastIndexOf(item: GameComponent, i: number): number;
  public LastIndexOf(item: GameComponent, i: number, count: number): number;
  public Remove(item: GameComponent): boolean;
  public RemoveAll(predicate: System.Predicate<GameComponent>): number;
  public RemoveAt(i: number): void;
  public RemoveRange(i: number, count: number): void;
  public Reverse(): void;
  public Reverse(i: number, count: number): void;
  public Sort(): void;
  public Sort(comparison: System.Comparison<GameComponent>): void;
  public Sort(comparer: System.IComparer<GameComponent>): void;
  public Sort(i: number, count: number, comparer: System.IComparer<GameComponent>): void;
  public ToArray(): Array<GameComponent>;
  public TrimExcess(): void;
  public TrueForAll(predicate: System.Predicate<GameComponent>): boolean;


  [ i: number ] : GameComponent;
}
declare class GameComponentsCollectionEventArgs extends System.EventArgs {
  constructor(component: GameComponent);
  GameComponent: GameComponent;
}
declare enum GameRunBehavior {
  Asynchronous,
  Synchronous
}
declare class GameTime {
  constructor();
  constructor(total: System.TimeSpan, elapsed: System.TimeSpan);
  constructor(total: System.TimeSpan, elapsed: System.TimeSpan, isRunningSlowly: boolean);

  public ElapsedGameTime: System.TimeSpan;
  public IsRuningSlowly: boolean;
  public TotalGameTime: System.TimeSpan;
}
declare interface GameWindow {
  SetSupportedOrientations(orientations: DisplayOrientation): void;
  SetTitle(title: string): void;

  AllowAltF4: boolean;
  AllowUserResizing: boolean;
  ClientBounds: Rectangle;
  CurrentOrientation: DisplayOrientation;
  IsBorderless: boolean;
  Position: Point;
  Title: string;

  ClientSizeChanged: ClearScriptEvent<System.EventArgs>;
  OrientationChanged: ClearScriptEvent<System.EventArgs>;
  TextInput: ClearScriptEvent<TextInputEventArgs>;
}
declare interface LaunchParameters { }
declare class MathHelper {
  public static Barycentric(a: number, b: number, c: number, a1: number, a2: number): number;
  public static CatmullRom(a: number, b: number, c: number, d: number, amount: number): number;
  public static Clamp(value: number, min: number, max: number): number;
  public static Distance(a: number, b: number): number;
  public static Hermite(v1: number, t1: number, v2: number, t2: number, amount: number): number;
  public static IsPowerOfTwo(value: number): boolean;
  public static Lerp(a: number, b: number, amount: number): number;
  public static LerpPrecise(a: number, b: number, amount: number): number;
  public static Max(a: number, b: number): number;
  public static Min(a: number, b: number): number;
  public static SmoothStep(a: number, b: number, amount: number): number;
  public static ToDegrees(radians: number): number;
  public static ToRadians(degrees: number): number;
  public static WrapAngle(angle: number): Number;

  public static E: number;
  public static Log10E: number;
  public static Log2E: number;
  public static Pi: number;
  public static PiOver2: number;
  public static PiOver4: number;
  public static TwoPi: number;
}
declare class Matrix {
  public static Add(a: Matrix, b: Matrix): Matrix;
  public static CreateBillboard(objectPosition: Vector3, cameraPosition: Vector3, cameraUpVector: Vector3, cameraForwardVector: Vector3): Matrix;
  public static CreateConstrainedBillboard(objectPosition: Vector3, cameraPosition: Vector3, rotateAxis: Vector3, cameraForwardVector: Vector3, objectForwardVector: Vector3): Matrix;
  public static CreateFromAxisAngle(axis: Vector3, angle: number): Matrix;
  public static CreateFromQuaternion(quaternion: Quaternion): Matrix;
  public static CreateFromYawPitchRoll(yaw: number, pitch: number, roll: number): Matrix;
  public static CreateLookAt(cameraPosition: Vector3, cameraTarget: Vector3, cameraUpVector: Vector3): Matrix;
  public static CreateOrthographic(width: number, height: number, zNearPlane: number, zFarPlane: number): Matrix;
  public static CreateOrthographicOffCenter(left: number, right: number, bottom: number, top: number, zNearPlane: number, zFarPlane: number): Matrix;
  public static CreateOrthographicOffCenter(viewingVolume: Rectangle, zNearPlane: number, zFarPlane: number): Matrix;
  public static CreatePerspective(width: number, height: number, nearPlaneDistance: number, farPlaneDistance: number): Matrix;
  public static CreatePerspectiveFieldOfView(fov: number, aspectRation: number, nearPlaneDistance: number, farPlaneDistance: number): Matrix;
  public static CreatePerspectiveOffCenter(left: number, right: number, bottom: number, top: number, nearPlaneDistance: number, farPlaneDistance: number): Matrix;
  public static CreatePerspectiveOffCenter(viewingVolume: Rectangle, nearPlaneDistance: number, farPlaneDistance: number): Matrix;
  public static CreateReflection(plane: Plane): Matrix;
  public static CreateRotationX(radians: number): Matrix;
  public static CreateRotationY(radians: number): Matrix;
  public static CreateRotationZ(radians: number): Matrix;
  public static CreateScale(scale: number): Matrix;
  public static CreateScale(x: number, y: number, z: number): Matrix;
  public static CreateScale(vector: Vector3): Matrix;
  public static CreateShadow(lightDirection: Vector3, plane: Plane): Matrix;
  public static CreateTranslation(x: number, y: number, z: number): Matrix;
  public static CreateTranslation(vector: Vector3): Matrix;
  public static CreateWorld(position: Vector3, forward: Vector3, up: Vector3): Matrix;
  public Decompose(out_Scale: Vector3, out_Rotation: Vector3, out_Translation: Vector3): boolean;
  public Determinant(): number;
  public static Divide(a: Matrix, b: number): Matrix;
  public static Divide(a: Matrix, b: Matrix): Matrix;
  public Equals(b: Matrix): boolean;
  public static Invert(a: Matrix): Matrix;
  public static Lerp(a: Matrix, b: Matrix, amount: number): Matrix;
  constructor(m11: number, m12: number, m13: number, m14: number, m21: number, m22: number, m23: number, m24: number, m31: number, m32: number, m33: number, m34: number, m41: number, m42: number, m43: number, m44: number);
  constructor(row1: Vector4, row2: Vector4, row3: Vector4, row4: Vector4);
  public static Multiply(a: Matrix, b: number): Matrix;
  public static Multiply(a: Matrix, b: Matrix): Matrix;
  public static Negate(a: Matrix): Matrix;
  public static Subtract(a: Matrix, b: Matrix): Matrix;
  public static ToFloatArray(a: Matrix): System.Array<number>;
  public ToString(): string;
  public static Transpose(a: Matrix): Matrix;
  public Backward: Vector3;
  public Down: Vector3;
  public static Identity: Matrix;
  public Left: Vector3;
  public Right: Vector3;
  public Rotation: Vector3;
  public Scale: Vector3;
  public Translation: Vector3;
  public Up: Vector3;

  public M11: number;
  public M12: number;
  public M13: number;
  public M14: number;
  public M21: number;
  public M22: number;
  public M23: number;
  public M24: number;
  public M31: number;
  public M32: number;
  public M33: number;
  public M34: number;
  public M41: number;
  public M42: number;
  public M43: number;
  public M44: number;

  [ i: number ] : System.Array<number> | number | any;
}
declare class Plane {
  public Dot(value: Vector4): number;
  public DotCoordinate(value: Vector3): number;
  public DotNormal(value: Vector3): number;
  public Equals(b: Plane): boolean;
  public Intersects(box: BoundingBox): PlaneIntersectionType;
  public Intersects(frustum: BoundingFrustum): PlaneIntersectionType;
  public Intersects(sphere: BoundingSphere): PlaneIntersectionType;
  public Normalize(): void;
  public static Normalize(plane: Plane): Plane;
  constructor(a: number, b: number, c: number, d: number);
  constructor(normal: Vector3, d: number);
  constructor(value: Vector4);
  public ToString(): string;
  public static Transform(plane: Plane, matrix: Matrix): Plane;
  public static Transform(plane: Plane, rotation: Quaternion): Plane;

  public D: number;
  public Normal: Vector3;
}
declare enum PlaneIntersectionType {
  Back,
  Front,
  Intersecting
}
declare enum PlayerIndex {
  One,
  Two,
  Three,
  Four
}
declare class Point {
  // Static Members
  public static Zero: Point;

  // Constructors
  constructor(value: number);
  constructor(x: number, y: number);

  // Instance Members
  public Equals(b: Point): boolean;
  public ToString(): string;
  public ToVector2(): Vector2;

  public X: number;
  public Y: number;
}
declare class Quaternion {
  public static Add(a: Quaternion, b: Quaternion): Quaternion;
  public static Concatenate(a: Quaternion, b: Quaternion): Quaternion;
  public Conjugate(): void;
  public static Conjugate(a: Quaternion): Quaternion;
  public static CreateBillboard(objectPosition: Vector3, cameraPosition: Vector3, cameraUpVector: Vector3, cameraForwardVector: Vector3): Quaternion;
  public static CreateConstrainedBillboard(objectPosition: Vector3, cameraPosition: Vector3, rotateAxis: Vector3, cameraForwardVector: Vector3, objectForwardVector: Vector3): Quaternion;
  public static CreateFromAxisAngle(axis: Vector3, angle: number): Quaternion;
  public static CreateFromRotationMatrix(matrix: Matrix): Quaternion;
  public static CreateFromYawPitchRoll(yaw: number, pitch: number, roll: number): Quaternion;
  public static Divide(a: Quaternion, b: number): Quaternion;
  public static Divide(a: Quaternion, b: Quaternion): Quaternion;
  public static Dot(a: Quaternion, b: Quaternion): number;
  public Equals(b: Quaternion): boolean;
  public static Inverse(a: Quaternion): Quaternion;
  public Length(): number;
  public LengthSquared(): number;
  public static Lerp(a: Quaternion, b: Quaternion, amount: number): Quaternion;
  public static Multiply(a: Quaternion, b: number): Quaternion;
  public static Multiply(a: Quaternion, b: Quaternion): Quaternion;
  public static Negate(a: Quaternion): Quaternion;
  public Normalize(): void;
  public static Normalize(a: Quaternion): Quaternion;
  constructor(value: Vector3, w: number);
  constructor(value: Vector4);
  public static Slerp(a: Quaternion, b: Quaternion, amount: number): Quaternion;
  public static Subtract(a: Quaternion, b: Quaternion): Quaternion;
  public ToString(): string;
  public ToVector4(): Vector4;
  public static Identity: Quaternion;
  public W: number;
  public X: number;
  public Y: number;
  public Z: number;
}
declare class Ray {
  public Equals(b: Ray): boolean;

  constructor(position: Vector3, direction: Vector3);

  public Intersects(b: BoundingBox): boolean;
  public Intersects(b: BoundingSphere): boolean;
  public Intersects(b: Plane): PlaneIntersectionType;
  public ToString(): string;

  public Direction: Vector3;
  public Position: Vector3;
}
declare class Rectangle {
  public Contains(x: number, y: number): boolean;
  public Contains(point: Point): boolean;
  public Contains(rect: Rectangle): boolean;
  public Contains(vector: Vector2): boolean;
  public Equals(b: Rectangle);
  public Inflate(x: number, y: number): void;
  public static Intersect(a: Rectangle, b: Rectangle): Rectangle;
  public Intersects(b: Rectangle): boolean;
  public Offset(x: number, y: number): void;
  public Offset(point: Point): void;
  public Offset(vector: Vector2): void;
  constructor(x: number, y: number, width: number, height: number);
  constructor(position: Point, size: Point);
  public ToString(): string;
  public static Union(a: Rectangle, b: Rectangle): Rectangle;
  public Bottom: number;
  public Center: Point;
  public static Empty: Rectangle;
  public IsEmpty: boolean;
  public Left: number;
  public Location: Point;
  public Right: number;
  public Size: Point;
  public Top: number;
  public Height: number;
  public Width: number;
  public X: number;
  public Y: number;
}
declare class TextInputEventArgs extends System.EventArgs {
  constructor(char: string);
  public Character: string;
}
declare class Vector2 {
  // Static Members
  public static Add(a: Vector2, b: Vector2): Vector2;
  public static Add(a: Vector2, b: number): Vector2;
  public static Barycentric(a: Vector2, b: Vector2, c: Vector2, amount: number, amount2: number): Vector2;
  public static CatmullRom(a: Vector2, b: Vector2, c: Vector2, d: Vector2, amount: number): Vector2;
  public static Clamp(a: Vector2, min: Vector2, max: Vector2): Vector2;
  public static Distance(a: Vector2, b: Vector2): number;
  public static DistanceSquared(a: Vector2, b: Vector2): number;
  public static Divide(a: Vector2, b: number): Vector2;
  public static Divide(a: Vector2, b: Vector2): Vector2;
  public static Dot(a: Vector2, b: Vector2): number;
  public static Hermite(a: Vector2, tangent1: Vector2, b: Vector2, tangent2: Vector2, amount: number): Vector2;
  public static Lerp(a: Vector2, b: Vector2, amount: number): Vector2;
  public static LerpPrecise(a: Vector2, b: Vector2, amount: number): Vector2;
  public static Max(a: Vector2, b: Vector2): Vector2;
  public static Min(a: Vector2, b: Vector2): Vector2;
  public static Multiply(a: Vector2, b: Vector2): Vector2;
  public static Multiply(a: Vector2, b: number): Vector2;
  public static Negate(a: Vector2): Vector2;
  public static Reflect(a: Vector2, normal: Vector2): Vector2;
  public static SmoothStep(a: Vector2, b: Vector2, amount: number): Vector2;
  public static Subtract(a: Vector2, b: Vector2): Vector2;
  public static Subtract(a: Vector2, b: number): Vector2;
  public static Transform(position: Vector2, matrix: Matrix): Vector2;
  public static Transform(position: Vector2, rotation: Quaternion): Vector2;
  public static Transform(source: System.Array<Vector2>, srcIdx: number, refMatrix: Matrix, dst: System.Array<Vector2>, dstIdx: number, length: number): void;
  public static TransformNormal(a: Vector2, matrix: Matrix): Vector2;
  public static TransformNormal(source: System.Array<Vector2>, srcIdx: number, refMatrix: Matrix, dst: System.Array<Vector2>, dstIdx: number, length: number): void;

  public static One: Vector2;
  public static UnitX: Vector2;
  public static UnitY: Vector2;
  public static Zero: Vector2;

  // Constructors
  constructor(value: number);
  constructor(x: number, y: number);

  // Members
  public Equals(b: Vector2): boolean;
  public Length(): number;
  public LengthSquared(): number;
  public Normalize(): void;
  public ToPoint(): Point;
  public ToString(): string;

  public X: number;
  public Y: number;
}
declare class Vector3 {
  // Static Members
  public static Add(a: Vector3, b: Vector3): Vector3;
  public static Add(a: Vector3, b: number): Vector3;
  public static Barycentric(a: Vector3, b: Vector3, c: Vector3, amount: number, amount2: number): Vector3;
  public static CatmullRom(a: Vector3, b: Vector3, c: Vector3, d: Vector3, amount: number): Vector3;
  public static Clamp(a: Vector3, min: Vector3, max: Vector3): Vector3;
  public static Distance(a: Vector3, b: Vector3): number;
  public static DistanceSquared(a: Vector3, b: Vector3): number;
  public static Divide(a: Vector3, b: number): Vector3;
  public static Divide(a: Vector3, b: Vector3): Vector3;
  public static Dot(a: Vector3, b: Vector3): number;
  public static Hermite(a: Vector3, tangent1: Vector3, b: Vector3, tangent2: Vector3, amount: number): Vector3;
  public static Lerp(a: Vector3, b: Vector3, amount: number): Vector3;
  public static LerpPrecise(a: Vector3, b: Vector3, amount: number): Vector3;
  public static Max(a: Vector3, b: Vector3): Vector3;
  public static Min(a: Vector3, b: Vector3): Vector3;
  public static Multiply(a: Vector3, b: Vector3): Vector3;
  public static Multiply(a: Vector3, b: number): Vector3;
  public static Negate(a: Vector3): Vector3;
  public static Reflect(a: Vector3, normal: Vector3): Vector3;
  public static SmoothStep(a: Vector3, b: Vector3, amount: number): Vector3;
  public static Subtract(a: Vector3, b: Vector3): Vector3;
  public static Subtract(a: Vector3, b: number): Vector3;
  public static Transform(position: Vector3, matrix: Matrix): Vector3;
  public static Transform(position: Vector3, rotation: Quaternion): Vector3;
  public static Transform(source: System.Array<Vector3>, srcIdx: number, refMatrix: Matrix, dst: System.Array<Vector3>, dstIdx: number, length: number): void;
  public static TransformNormal(a: Vector3, matrix: Matrix): Vector3;
  public static TransformNormal(source: System.Array<Vector3>, srcIdx: number, refMatrix: Matrix, dst: System.Array<Vector3>, dstIdx: number, length: number): void;

  public static Backward: Vector3;
  public static Down: Vector3;
  public static Forward: Vector3;
  public static Left: Vector3;
  public static One: Vector3;
  public static Right: Vector3;
  public static UnitX: Vector3;
  public static UnitY: Vector3;
  public static UnitZ: Vector3;
  public static Up: Vector3;
  public static Zero: Vector3;
  

  // Constructors
  constructor(value: number);
  constructor(x: number, y: number,z: number);
  constructor(vec2: Vector2, z: number);

  // Members
  public Equals(b: Vector3): boolean;
  public Length(): number;
  public LengthSquared(): number;
  public Normalize(): void;
  public ToString(): string;

  public X: number;
  public Y: number;
  public Z: number;
}
declare class Vector4 {
  // Static Members
  public static Add(a: Vector4, b: Vector4): Vector4;
  public static Add(a: Vector4, b: number): Vector4;
  public static Barycentric(a: Vector4, b: Vector4, c: Vector4, amount: number, amount2: number): Vector4;
  public static CatmullRom(a: Vector4, b: Vector4, c: Vector4, d: Vector4, amount: number): Vector4;
  public static Clamp(a: Vector4, min: Vector4, max: Vector4): Vector4;
  public static Distance(a: Vector4, b: Vector4): number;
  public static DistanceSquared(a: Vector4, b: Vector4): number;
  public static Divide(a: Vector4, b: number): Vector4;
  public static Divide(a: Vector4, b: Vector4): Vector4;
  public static Dot(a: Vector4, b: Vector4): number;
  public static Hermite(a: Vector4, tangent1: Vector4, b: Vector4, tangent2: Vector4, amount: number): Vector4;
  public static Lerp(a: Vector4, b: Vector4, amount: number): Vector4;
  public static LerpPrecise(a: Vector4, b: Vector4, amount: number): Vector4;
  public static Max(a: Vector4, b: Vector4): Vector4;
  public static Min(a: Vector4, b: Vector4): Vector4;
  public static Multiply(a: Vector4, b: Vector4): Vector4;
  public static Multiply(a: Vector4, b: number): Vector4;
  public static Negate(a: Vector4): Vector4;
  public static Reflect(a: Vector4, normal: Vector4): Vector4;
  public static SmoothStep(a: Vector4, b: Vector4, amount: number): Vector4;
  public static Subtract(a: Vector4, b: Vector4): Vector4;
  public static Subtract(a: Vector4, b: number): Vector4;
  public static Transform(position: Vector4, matrix: Matrix): Vector4;
  public static Transform(position: Vector4, rotation: Quaternion): Vector4;
  public static Transform(source: System.Array<Vector4>, srcIdx: number, refMatrix: Matrix, dst: System.Array<Vector4>, dstIdx: number, length: number): void;
  public static TransformNormal(a: Vector4, matrix: Matrix): Vector4;
  public static TransformNormal(source: System.Array<Vector4>, srcIdx: number, refMatrix: Matrix, dst: System.Array<Vector4>, dstIdx: number, length: number): void;

  public static One: Vector4;
  public static UnitW: Vector4;
  public static UnitX: Vector4;
  public static UnitY: Vector4;
  public static UnitZ: Vector4;
  public static Zero: Vector4;

  // Constructors
  constructor(value: number);
  constructor(x: number, y: number, z: number, w: number);
  constructor(vec2: Vector2, z: number, w: number);
  constructor(vec3: Vector3, w: number);

  // Members
  public Equals(b: Vector4): boolean;
  public Length(): number;
  public LengthSquared(): number;
  public Normalize(): void;
  public ToString(): string;

  public W: number;
  public X: number;
  public Y: number;
  public Z: number;
}

// Microsoft.Xna.Framework.Graphics

declare interface GraphicsDevice {
  Viewport: Viewport;
}
declare interface Texture2D {
  Bounds: Rectangle;
  Height: number;
  Width: number;
}
declare interface Viewport {
  AspectRation: number;
  Bounds: Rectangle;
  Height: number;
  MaxDepth: number;
  MinDepth: number;
  TitleSafeArea: Rectangle;
  Width: number;
  X: number;
  Y: number;
}
declare enum SpriteEffects {
  None,
  FlipHorizontally,
  FlipVertically
}

// Microsoft.Xna.Framework.Audio

declare interface AudioEmitter {
  DopplerScale: number;
  Forward: Vector3;
  Position: Vector3;
  Up: Vector3;
  Velocity: Vector3;
}
declare interface SoundEffect {
  CreateInstance(): SoundEffectInstance;
  Play(): void;
  Play(volume: number, pitch: number, pan: number): void;

  DistanceScale: number;
  DopplerScale: number;
  Duration: System.TimeSpan;
  IsDisposed: boolean;
  MasterVolume: number;
  Name: string;
}
declare namespace SoundEffect {
  export var MasterVolume: number;
  export var Speakers: any; // Is of type 'Speakers' but can't find that
  export var SpeedOfSound: number;
}
declare interface SoundEffectInstance {
  Apply3D(listener: AudioListener, emitter: AudioEmitter): void;
  Apply3D(listeners: System.Array<AudioListener>, emitter: AudioEmitter): void;
  Pause(): void;
  Play(): void;
  Resume(): void;
  Stop(): void;
  Stop(immediate: boolean): void;

  IsDisposed: boolean;
  IsLooped: boolean;
  Pan: number;
  Pitch: number;
  State: SoundState;
  Volume: number;
}
declare enum SoundState {
  Paused,
  Playing,
  Stopped
}