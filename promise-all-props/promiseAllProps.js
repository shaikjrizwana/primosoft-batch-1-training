
function promiseAllProps(obj) {
  const resolvedObject = Object.keys(obj).reduce((acc, key) => {
    const resolvedValue = obj[key].then((result) => result);
    acc[key]=resolvedValue;
    return acc;
  }, {});
  return Promise.resolve(resolvedObject);
}

export {
  promiseAllProps,
};
