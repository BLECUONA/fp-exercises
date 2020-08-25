type UnaryFunction<T, U> = (x: T) => U;

const compose = <T, U, V>(
  g: UnaryFunction<T, U>,
  f: UnaryFunction<U, V>
): UnaryFunction<T, V> => {
  return (x: T) => f(g(x));
};

let stringToModify = "test";
const toUpperWithExtension = compose(
  (input: string) => input.toUpperCase(),
  (input: string) => (input += ".exe")
);
console.log(`New string : ${toUpperWithExtension(stringToModify)}`);
