declare namespace System {
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