const removeAnagrams = (arr: Array<string>): Array<string> => {
  if (arr === undefined || !Array.isArray(arr)) {
    throw new Error('INVALID_ARGUMENT');
  }

  const isOnlyString: boolean = arr.some(
    (predicate) => typeof predicate !== 'string'
  );

  if (isOnlyString) {
    throw new Error('INVALID_ELEMENT_IN_ARRAY');
  }
  const modifyString = (str: string) => {
    return str
      .toLowerCase()
      .split('')
      .sort()
      .filter((char) => char.match(/[a-zA-z]/))
      .join('');
  };
  const modifyArr = arr.map((w) => modifyString(w));

  const result: Array<string> = [];
  arr.map((w: string) => {
    const cnt: number = modifyArr.filter((s) => s === modifyString(w)).length;
    if (cnt === 1) {
      result.push(w);
    }
  });

  return result;
};

export default removeAnagrams;
