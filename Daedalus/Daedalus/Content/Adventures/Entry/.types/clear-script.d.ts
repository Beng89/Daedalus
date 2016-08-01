declare interface ClearScriptEventConnection {
  disconnect(): void;
}
declare interface ClearScriptEvent<T> {
  connect(fn: (sender: any, args: T) => void): ClearScriptEventConnection;
}
declare interface NewHostVariable {
  out: any;
  ref: any;
}
declare interface HostObject {
  del(type: any, fn: Function): any;
  newObj<T>(type: any, ...args: Array<any>): T;
  newArr<T>(type: any, size: number): System.Array<T>;
  newVar(type: any): NewHostVariable;
}
declare const Host: HostObject;