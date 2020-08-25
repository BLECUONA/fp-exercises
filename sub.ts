const sub = <T>(initArray: T[], ...args: T[]): T[] => {
  let res: T[] = [...initArray];
  res.shift();
  return res;
};

const initArray = [1, 2, 3, 4, 5];
const shiftedArray = sub(initArray);
console.log(`Shifted array : ${shiftedArray}`);
console.log(`Init array is unchanged : ${initArray}`);
