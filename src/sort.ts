const sort = (text: string): string => {
  if (typeof text !== 'string') {
    throw new Error('INVALID_ARGUMENT');
  }
  const arr: Array<string> = text.split(' ');
  const result: Array<string> = [];
  arr.map((word) => {
    result.push(Array.from(word.toLowerCase()).sort().join(''));
  });

  return result
    .sort((a, b) => {
      return a.length - b.length;
    })
    .join(' ');
};

export default sort;
