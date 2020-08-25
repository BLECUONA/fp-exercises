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

//#region MIN & MAX
const arrayMinMax = (input: DeepNumberArray[], findMin: boolean = false) => {
  let res: number | undefined;

  input.forEach((element) => {
    const increaseMinMax = _memoizeMinMax(findMin);

    const elementMinMax = _rowMinMax(element, increaseMinMax, findMin);
    if (
      (!findMin && (typeof res === "undefined" || elementMinMax > res)) ||
      (findMin && (typeof res === "undefined" || elementMinMax < res))
    )
      res = elementMinMax;
  });

  return res ?? 0;
};

const _rowMinMax = (
  input: DeepNumberArray,
  memo: (value: DeepNumberArray) => number,
  findMin: boolean = false
): number => {
  if (Array.isArray(input)) return _recursiveMinMax(input, memo, findMin);
  else return memo(input);
};

const _memoizeMinMax = (findMin: boolean = false) => {
  let res = !findMin ? 0 : undefined;

  if (!findMin) {
    return (value: DeepNumberArray): number => {
      if (typeof value === "number" && value > Number(res)) res = value;
      return res ?? 0;
    };
  } else {
    return (value: DeepNumberArray): number => {
      if (typeof value === "number" && (res === undefined || value < res))
        res = value;
      return res ?? 0;
    };
  }
};

const _recursiveMinMax = (
  input: DeepNumberArray[],
  memo: (value: DeepNumberArray) => number,
  findMin: boolean = false
) => {
  let max: number | undefined;
  input.forEach((element) => {
    memo(element);
    const res = _rowMinMax(element, memo);
    if (
      (!findMin && (typeof max === "undefined" || res > max)) ||
      (findMin && (typeof max === "undefined" || res < max))
    )
      max = res;
  });
  return max ?? 0;
};
//#region MIN & MAX

const array = [1, [[2], 3], [4], 5, [6, 42, [[86], [[12]], 1337]], 1];

// sum
const sumResult = sum(array);
console.log(`Sum is ${sumResult}`);

// depth
const depthResult = arrayDepth(array);
console.log(`Depth is ${depthResult}`);

// max
const maxResult = arrayMinMax(array);
console.log(`Max is ${maxResult}`);

// min
const minResult = arrayMinMax(array, true);
console.log(`Max is ${minResult}`);
