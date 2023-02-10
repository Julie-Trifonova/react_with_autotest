const getNumberProps = (obj: object): Array<any> => {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    throw new Error('INVALID_ARGUMENT');
  }
  const result: Array<any> = [];
  function recursiveLoop(obj: object) {
    for (const key in obj) {
      if (typeof obj !== 'object' || obj === null || Array.isArray(obj[key])) {
        throw new Error('INVALID_ARGUMENT');
      }
      if (typeof obj[key] == 'object' && obj[key] !== null) {
        recursiveLoop(obj[key]);
      } else {
        if (typeof obj[key] === 'number') {
          result.push(key);
        }
      }
    }
  }
  recursiveLoop(obj);
  return result.sort();
};

export default getNumberProps;
