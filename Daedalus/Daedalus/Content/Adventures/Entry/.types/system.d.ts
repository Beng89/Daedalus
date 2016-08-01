declare namespace System {
  export interface IEnumerable<T> {
    GetEnumerator(): any;
  }
  export interface IEqualityComparer<T> {
    Equals(a: T, b: T): boolean;
  }
  export interface IComparer<T> {
    Compare(a: T, b: T): number;
  }
  export interface Comparison<T> {
    (a: T, b: T): number;
  }
  export interface Predicate<T> {
    (a: T, b: T): boolean;
  }
  export interface Action<T> {
    (a: T): void;
  }
  export class List<T> {
    constructor();
    constructor(capacity: number);

    public Capacity: number;
    public Count: number;
    public Add(item: T): void;
    public AddRange(collection: IEnumerable<T>): void;
    public AsReadOnly(): any; // is a ReadOnlyCollection
    public BinarySearch(item: T): number;
    public BinarySearch(item: T, comparer: IComparer<T>): number;
    public BinarySearch(i: number, count: number, item: T, comparer: IComparer<T>): number;
    public Clear(): void;
    public Contains(item: T): boolean;
    public CopyTo(array: Array<T>): void;
    public CopyTo(array: Array<T>, arrayIndex: number): void;
    public CopyTo(i: number, array: Array<T>, arrayIndex: number, count: number): void;
    public Exists(predicate: Predicate<T>): boolean;
    public Find(predicate: Predicate<T>): T;
    public FindAll(predicate: Predicate<T>): List<T>;
    public FindIndex(predicate: Predicate<T>): number;
    public FindIndex(i: number, predicate: Predicate<T>): number;
    public FindIndex(i: number, count: number, predicate: Predicate<T>): number;
    public FindLast(predicate: Predicate<T>): T;
    public FindLastIndex(predicate: Predicate<T>): T;
    public FindLastIndex(i: number, predicate: Predicate<T>): T;
    public FindLastIndex(i: number, count: number, predicate: Predicate<T>): T;
    public ForEach(action: Action<T>): void;
    public GetRange(i: number, count: number): List<T>;
    public IndexOf(item: T): number;
    public IndexOf(item: T, i: number): number;
    public IndexOf(item: T, i: number, count: number): number;
    public Insert(i: number, item: T): void;
    public InsertRange(i: number, items: IEnumerable<T>): void;
    public LastIndexOf(item: T): number;
    public LastIndexOf(item: T, i: number): number;
    public LastIndexOf(item: T, i: number, count: number): number;
    public Remove(item: T): boolean;
    public RemoveAll(predicate: Predicate<T>): number;
    public RemoveAt(i: number): void;
    public RemoveRange(i: number, count: number): void;
    public Reverse(): void;
    public Reverse(i: number, count: number): void;
    public Sort(): void;
    public Sort(comparison: Comparison<T>): void;
    public Sort(comparer: IComparer<T>): void;
    public Sort(i: number, count: number, comparer: IComparer<T>): void;
    public ToArray(): Array<T>;
    public TrimExcess(): void;
    public TrueForAll(predicate: Predicate<T>): boolean;

    [ i: number ] : T;
  }
  export class Array<T> {
    public IsFixedSize: boolean;
    public IsReadOnly: boolean;
    public IsSynchronized: boolean;
    public Length: number;
    public LongLength: number;
    public Rank: number;
    public SyncRoot: any;
    public static AsReadOnly<T>(array: Array<T>): any; // ReadOnlyCollection<T>
    public static BinarySearch<T>(array: Array<T>, value: T): number;
    public static Clear<T>(array: Array<T>, i: number, length: number): void;
    public static Copy<T>(source: Array<T>, destination: Array<T>, length: number): void;
    public static Copy<T>(source: Array<T>, srcIndex: number, destination: Array<T>, dstIndex: number): void;
    public static Copy<T>(source: Array<T>, srcIndex: number, destination: Array<T>, dstIndex: number, length: number): void;
    public static Exists<T>(array: Array<T>, predicate: Predicate<T>): boolean;
    public static Find<T>(array: Array<T>, predicate: Predicate<T>): T;
    public static FindAll<T>(array: Array<T>, predicate: Predicate<T>): Array<T>;
    public static FindIndex<T>(array: Array<T>, predicate: Predicate<T>): number;
    public static FindIndex<T>(array: Array<T>, start: number, predicate: Predicate<T>): number;
    public static FindIndex<T>(array: Array<T>, start: number, count: number, predicate: Predicate<T>): number;
    public static FindLast<T>(array: Array<T>, predicate: Predicate<T>): T;
    public static FindLastIndex<T>(array: Array<T>, predicate: Predicate<T>): number;
    public static FindLastIndex<T>(array: Array<T>, start: number, predicate: Predicate<T>): number;
    public static FindLastIndex<T>(array: Array<T>, start: number, count: number, predicate: Predicate<T>): number;
    public static ForEach<T>(array: Array<T>, action: Action<T>): void;
    public static IndexOf<T>(array: Array<T>, item: T): number;
    public static IndexOf<T>(array: Array<T>, item: T, start: number): number;
    public static IndexOf<T>(array: Array<T>, item: T, start: number, count: number): number;
    public static LastIndexOf<T>(array: Array<T>, item: T): number;
    public static LastIndexOf<T>(array: Array<T>, item: T, start: number): number;
    public static LastIndexOf<T>(array: Array<T>, item: T, start: number, count: number): number;
    public static Resize<T>(ref_Array: Array<T>, newSize: number): void;
    public static Reverse<T>(array: Array<T>): void;
    public static Reverse<T>(array: Array<T>, i: number, length: number): void;
    public static Sort<T>(array: Array<T>): void;
    public static Sort<T>(array: Array<T>, comparer: IComparer<T>): void;
    public static Sort<T>(array: Array<T>, comparison: Comparison<T>): void;
    public static Sort<K, V>(keys: Array<K>, values: Array<V>): void;
    public static Sort<K, V>(keys: Array<K>, values: Array<V>, comparer: IComparer<K>): void;
    public static Sort<T>(array: Array<T>, start: number, length: number): void;
    public static Sort<K, V>(keys: Array<K>, values: Array<V>, start: number, length: number): void;
    public static Sort<T>(array: Array<T>, start: number, length: number, comparer: IComparer<T>): void;
    public static Sort<K, V>(keys: Array<K>, vaues: Array<V>, start: number, length: number, comparer: IComparer<K>): void;
    public static TrueForAll<T>(array: Array<T>, predicate: Predicate<T>): boolean;
    public Clone(): any;
    public CopyTo(destination: Array<T>, i: number): void;
    public GetLength(dimension: number): number;
    public GetLongLength(dimension: number): number;
    public GetLowerBound(dimension: number): number;
    public GetUpperBound(dimension: number): number;
    public GetValue(indices: Array<number>): T;
    public GetValue(index: number): T;
    public GetValue(i1: number, i2: number): T;
    public Getvalue(i1, number, i2: number, i3: number): T;
    public SetValue(value: T, i: number): void;
    public SetValue(value: T, indices: Array<number>): void;
    public SetValue(value: T, i1: number, i2: number): void;
    public SetValue(value: T, i1: number, i2: number, i3: number): void;


    [ i: number ] : T;
  }
  export class Dictionary<K, V> {
    constructor();
    constructor(capacity: number);
    constructor(comparer: IEqualityComparer<K>);
    constructor(capacity: number, comparer: IEqualityComparer<K>);
    
    public Comparer: IEqualityComparer<K>;
    public Count: number;
    public Keys: any;
    public Values: any;

    public Add(key: K, value: V): void;
    public Clear(): void;
    public ContainsKey(key: K): boolean;
    public ContainsValue(value: V): boolean;
    public GetEnumerator(): any // Enumerator
    public Remove(key: K): boolean;
    public TryGetValue(key: K, out_Value: V): boolean;


    [ key: string ] : V | any;
    [ key: number ] : V;
  }

  export class EventArgs {

  }
  export class TimeSpan {
    public Add(b: TimeSpan): TimeSpan;
    public CompareTo(b: TimeSpan): number;
    public Days: number;
    public Duration(): TimeSpan;
    public Equals(b: TimeSpan): boolean;
    public Hours: number;
    public Milliseconds: number;
    public Minutes: number;
    public Negate(): TimeSpan;
    public Seconds: number;
    public Subtract(b: TimeSpan): TimeSpan;
    public Ticks: number;
    public ToString(): string;
    public TotalDays: number;
    public TotalHours: number;
    public TotalMilliseconds: number;
    public TotalMinutes: number;
    public TotalSeconds: number;
  }
}