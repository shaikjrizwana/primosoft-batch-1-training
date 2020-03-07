function mapObject(obj, fun) {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = fun(obj[key]);
    return acc;
  }, {});
}
export {
  mapObject,
};
