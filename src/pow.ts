const pow = (a: number, b: number | undefined): number | any => {
  if (typeof a !== 'number' || (typeof b !== 'number' && b !== undefined)) {
    throw new Error('INVALID_ARGUMENT');
  }
  if (a !== undefined && b !== undefined) {
    return Math.pow(a, b);
  } else if (b === undefined) {
    return function (c: number): number {
      if (typeof c !== 'number') {
        throw new Error('INVALID_ARGUMENT');
      }
      return Math.pow(a, c);
    };
  }
};

export default pow;
