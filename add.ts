const add = <T>(initArray: T[], ...args: T[]): T[] => {
  let res: T[] = [...initArray];
  args.forEach((element) => {
    res.push(element);
  });
  return res;
};

const initArray = [1, 2, 3, 4, 5];
const pushedArray = add(initArray, 5, 6);
console.log(`New array : ${pushedArray}`);
console.log(`New array[2] : ${pushedArray[5]}`);
console.log(`Init array is unchanged : ${initArray}`);
