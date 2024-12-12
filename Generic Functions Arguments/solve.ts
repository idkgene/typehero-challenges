const identity = <T>(arg: T) => arg;

const mapArray = <T, U>(arr: T[], fn: (item: T) => U): U[] => arr.map(fn);
