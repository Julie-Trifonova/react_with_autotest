const multiply = (a: number) => {
  if (typeof a !== 'number') {
    throw new Error('INVALID_ARGUMENT');
  }
  return function (b: number) {
    if (typeof b !== 'number') {
      throw new Error('INVALID_ARGUMENT');
    }
    return a * b;
  };
};

export default multiply;
