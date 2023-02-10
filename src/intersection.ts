const intersection = (
  arr1: Array<number>,
  arr2: Array<number>
): Array<number> => {
  if (arr1 === undefined || arr2 === undefined) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error('INVALID_ARGUMENT');
  }
  const checkIfOnlyNumberArr1: boolean = arr1.some(
    (element: number) => typeof element !== 'number'
  );
  const checkIfOnlyNumberArr2: boolean = arr2.some(
    (element: number) => typeof element !== 'number'
  );
  if (checkIfOnlyNumberArr1 || checkIfOnlyNumberArr2) {
    throw new Error('INVALID_ELEMENT_IN_ARRAY');
  }

  const result: Set<number> = new Set(
    arr1.filter((value: number) => arr2.includes(value))
  );
  return Array.from(result);
};

export default intersection;
