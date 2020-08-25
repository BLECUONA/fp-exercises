interface Array<T> {
  myMap(callback: (input: T) => T): Array<T>;
}

Array.prototype.myMap = function <T>(callback: (input: T) => T) {
  let mappedArray: T[] = [];
  this.forEach((element) => mappedArray.push(callback(element)));
  return mappedArray;
};

const array1 = [1, 4, 9, 16];
const map1 = array1.myMap((x) => x * 2);
console.log(`new array : ${map1}`); // expected output: Array [2, 8, 18, 32]
console.log(`init array : ${array1}`); // expected output: Array [1, 4, 9, 16]

const array2 = ["1", "4", "9", "16"];
const map2 = array2.myMap((x) => (x += ".exe"));
console.log(`new array : ${map2}`); // expected output: Array [2, 8, 18, 32]
console.log(`init array : ${array2}`); // expected output: Array [1, 4, 9, 16]
