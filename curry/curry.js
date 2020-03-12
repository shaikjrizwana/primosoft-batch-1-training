function curry(fun, ...currentArguments) {
  const requiredArguments = fun.length;
  if (requiredArguments <= currentArguments.length) {
    return fun(...currentArguments);
  }
  return (...futureArguments) => curry(fun, ...currentArguments, ...futureArguments);
}

export { curry };
