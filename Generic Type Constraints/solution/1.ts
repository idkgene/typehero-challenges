export type AllowString<T extends string> = T;
export type AllowNumber<T extends number> = T;

export type CreateLogger<T extends (a: number) => void> = {
  log: T;
  exit: () => void;
};
