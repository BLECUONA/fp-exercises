type DeepNumberArray = number | DeepNumberArray[];

//#region SUM
const sum = (input: DeepNumberArray) => {
  let res = 0;
  if (Array.isArray(input)) {
    input.forEach((element) => {
      res += sum(element);
    });
    return res;
  } else {
    return input;
  }
};
//#endregion SUM

//#region DEPTH
const arrayDepth = (input: DeepNumberArray[]) => {
  let res = 0;

  input.forEach((element) => {
    const increaseDepth = _memoizeDepth();

    const elementDepth = _rowDepth(element, increaseDepth);
    if (elementDepth > res) res = elementDepth;
  });

  return res;
};

const _memoizeDepth = () => {
  let depthRes = 0;

  return (input: DeepNumberArray) =>
    Array.isArray(input) ? (depthRes += 1) : depthRes;
};

const _rowDepth = (
  input: DeepNumberArray,
  memo: (input: DeepNumberArray) => number
) => {
  if (Array.isArray(input)) return _recursiveRowDepth(input, memo);
  else return memo(input);
};

const _recursiveRowDepth = (
  input: DeepNumberArray[],
  memo: (input: DeepNumberArray) => number
) => {
  let deep = 0;
  input.forEach((element) => {
    memo(element);
    const res = _rowDepth(element, memo);
    if (res > deep) deep = res;
  });
  return deep;
};
//#endregion DEPTH

const array = [1, [[2], 3], [4], 5, [6, 42, [[86], [[12]], 1337]], 1];

// sum
const sumResult = sum(array);
console.log(`Sum is ${sumResult}`);

// depth
const depthResult = arrayDepth(array);
console.log(`Depth is ${depthResult}`);
