export type gridValue = "White" | "Black" | "Unknown";

export type gridParams = {
  prevValue: gridValue;
  gridValueChange: Function;
  classNames?: string;
};
