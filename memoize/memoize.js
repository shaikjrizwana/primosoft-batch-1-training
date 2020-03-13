
function memoize(func) {
  const cache = {};
  return (...args) => {
    const input = args[0];
    if (input in cache) {
      return cache[input];
    }
    const result = func(input);
    cache[input] = result;
    // console.log(result);
    return result;
  };
}

export {
  memoize,
};
