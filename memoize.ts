const memoizeCallNumber = () => {
  let count: number = 0;
  return () => (count += 1);
};

const increaseCallNumber = memoizeCallNumber();
console.log(
  `1st call - calls' number from memoize function : ${increaseCallNumber()}`
);
console.log(
  `2nd call - calls' number from memoize function : ${increaseCallNumber()}`
);
console.log(
  `3rd call - calls' number from memoize function : ${increaseCallNumber()}`
);
console.log(
  `4th call - calls' number from memoize function : ${increaseCallNumber()}`
);
