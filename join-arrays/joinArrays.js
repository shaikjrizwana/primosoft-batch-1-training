function joinArrays(...args) {
  return args.reduce((acc, arr) => {
    return acc.concat(arr);
  }, []);
}

export { joinArrays };
