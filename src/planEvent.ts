const planEvent = (func: () => any, time: number) => {
  if (typeof time !== 'number' || typeof func !== 'function') {
    throw new Error('INVALID_ARGUMENT');
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(func());
    }, time);
  });
};

export default planEvent;
