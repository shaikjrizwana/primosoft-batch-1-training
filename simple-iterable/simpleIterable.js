function simpleIterable() {
  const simpleIterator = {
    [Symbol.iterator]() {
      let val = 0;
      return {
        next() {
          if (val < 5) {
            val += 1;
            return { value: val, done: false };
          }

          return { value: undefined, done: true };
        },
      };
    },
  };
  return simpleIterator;
}

export { simpleIterable };
