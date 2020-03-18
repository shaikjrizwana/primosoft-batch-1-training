
function isPromise(...args) {
  return args[0] instanceof Promise;
}

export {
  isPromise,
};
