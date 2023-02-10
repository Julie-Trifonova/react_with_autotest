const sum = (...args: Array<number>): number => {
  if (args.length < 2) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }
  const res: boolean = args.some((a) => typeof a !== 'number');
  if (res) {
    throw new Error('INVALID_ARGUMENT');
  }
  let sum: number = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};

export default sum;
