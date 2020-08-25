type UnaryFunction<T, U> = (x: T) => U;
type NaryFunction<T, U> = (...args: T[]) => U;

const composeN = <T>(
  naryFunc: NaryFunction<T, T>,
  unaryFunc: UnaryFunction<T, T>
): NaryFunction<T, T> => {
  return (...x: T[]) => {
    let res: T;
    res = naryFunc(...x);
    res = unaryFunc(res);
    return res;
  };
};

const toUpperWithExtension = composeN(
  (input: string, extension: string) => (input += `.${extension}`),
  (input: string) => input.toUpperCase()
);
console.log(`New string : ${toUpperWithExtension("test", "copy")}`);
