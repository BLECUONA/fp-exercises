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

const array = [1, [[2], 3], [4], 5, [6, 42, [[86], [[12]], 1337]], 1];
const result = sum(array);
console.log(`Sum is ${result}`);
