const create = <T>(...args: T[]): T[] => {
  let res: T[] = [];
  args.forEach((element) => {
    res.push(element);
  });
  return res;
};

const createdArray = create(1, 2, 3, 4, 5);
console.log(`New array : ${createdArray}`);
console.log(`New array[2] : ${createdArray[2]}`);
