
function promiseAllProps(obj) {
  const object = Object.keys(obj).reduce((result, key) => {
    const value = obj[key].then((val) => val);
    result[key] = value;
    return result;
  }, {});
  return Promise.resolve(object);
}

export {
  promiseAllProps,
};
