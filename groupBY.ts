const groupBy = <T>(
  input: T[],
  callback: (input: T) => boolean
): { resTrue: T[]; resFalse: T[] } => {
  let resTrue: T[] = [];
  let resFalse: T[] = [];
  input.forEach((element) => {
    if (callback(element)) resTrue.push(element);
    else resFalse.push(element);
  });
  return { resTrue, resFalse };
};

const arrayToGroup = [1, 2, 3, 4, 2];
const { resTrue, resFalse } = groupBy(arrayToGroup, (item: number) => item > 2);
console.log(`>2 : ${resTrue}`);
console.log(`<=2 : ${resFalse}`);

const { resTrue: resTrue2, resFalse: resFalse2 } = groupBy(
  arrayToGroup,
  (item: number) => item == 2
);
console.log(`>2 : ${resTrue2}`);
console.log(`<=2 : ${resFalse2}`);

const arrayToGroup3 = ["a", "ab", "c"];
const { resTrue: resTrue3, resFalse: resFalse3 } = groupBy(
  arrayToGroup3,
  (item: string) => item.length == 1
);
console.log(`>2 : ${resTrue3}`);
console.log(`<=2 : ${resFalse3}`);
