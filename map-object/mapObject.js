function mapObject(obj, fun) {
  const newObj = {};
  for (const key in obj) {
    newObj[key] = fun(obj[key]);
  }
  return newObj;
}

export { mapObject };
