interface Array<T> {
  myFilter(callback: (input: T) => boolean): Array<T>;
}

Array.prototype.myFilter = function <T>(callback: (input: T) => boolean) {
  let mappedArray: T[] = [];
  this.forEach((element) => {
    if (callback(element)) mappedArray.push(element);
  });
  return mappedArray;
};

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.myFilter((word) => word.length > 6);
console.log(result); // expected output: Array ["exuberant", "destruction", "present"]
