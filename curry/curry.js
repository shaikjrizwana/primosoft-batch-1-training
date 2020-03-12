function curry(func, ...initialArgs) {
  const ExpectedNoOfArgs = (func.length <= initialArgs.length);
  if (ExpectedNoOfArgs) {
    return func(...initialArgs);
  }
  return (...remainingArgs) => curry(func, ...initialArgs, ...remainingArgs);
}
export {
  curry,
};
