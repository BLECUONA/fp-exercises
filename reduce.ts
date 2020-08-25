interface Array<T> {
  myReduce(
    reducer: (accumulator: number, currentValue: number) => number,
    initValue?: number
  ): number;
}

Array.prototype.myReduce = function (
  reducer: (accumulator: number, currentValue: number) => number,
  initValue?: number
) {
  let res: number = initValue ?? 0;
  this.forEach((element) => (res = reducer(res, element)));
  return res;
};

const array1 = [1, 2, 3, 4];
const reducer1 = (accumulator, currentValue) => accumulator + currentValue;

const res1a = array1.myReduce(reducer1);
console.log(res1a); // expected output: 10

const res1b = array1.myReduce(reducer1, 5);
console.log(res1b); // expected output: 15

const array2 = ["1", "2", "3", "4"];
const reducer2 = (accumulator, currentValue) => accumulator + currentValue;

const res2a = array2.myReduce(reducer2);
console.log(res2a); // expected output: 01234

const res2b = array2.myReduce(reducer2, 5);
console.log(res2b); // expected output: 51234
