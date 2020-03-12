function curry(fn, ...args) {
  return fn.length <= args.length
    ? fn(...args)
    : (...more) => curry(fn, ...args, ...more);
}

export {
  curry,
};
