declare interface ClearScriptEventConnection {
  disconnect(): void;
}
declare interface ClearScriptEvent<T> {
  connect(fn: (sender: any, args: T) => void): ClearScriptEventConnection;
}