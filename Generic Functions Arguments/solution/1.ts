export const identity = <T>(arg: T) => arg;

export const mapArray = <T, U>(arr: T[], fn: (item: T) => U): U[] => arr.map(fn);
