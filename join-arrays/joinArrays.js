function joinArrays(...args) {
  return args.reduce((result, array) => {
    for (const i in array) {
      result.push(array[i]);
    }
    return result;
  }, []);
}

export {
  joinArrays,
};
