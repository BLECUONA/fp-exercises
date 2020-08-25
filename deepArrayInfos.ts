type DeepNumberArray = number | DeepNumberArray[];

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

const everyDepth = (input: any[]) => {
  let res = 0;

  input.forEach((element) => {
    let increaseDepth = memoizeDepth();

    const elementDepth = depth(element, increaseDepth);
    if (elementDepth > res) res = elementDepth;
  });

  return res;
};

const depth = (
  input: DeepNumberArray,
  memo: (input: DeepNumberArray) => number
) => {
  if (Array.isArray(input)) {
    let deep = 0;
    input.forEach((element) => {
      memo(element);
      const temp = depth(element, memo);
      if (temp > deep) deep = temp;
    });
    return deep;
  } else return memo(input);
};

const memoizeDepth = () => {
  let depthRes = 0;

  return (input: DeepNumberArray) =>
    Array.isArray(input) ? (depthRes += 1) : depthRes;
};

const array = [1, [[2], 3], [4], 5, [6, 42, [[86], [[12]], 1337]], 1];

// sum
const sumResult = sum(array);
console.log(`Sum is ${sumResult}`);

// depth
const depthResult = everyDepth(array);
console.log(`Depth is ${depthResult}`);
