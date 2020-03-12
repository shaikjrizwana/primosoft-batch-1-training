function lowercaseKeys(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key.toLocaleLowerCase()] = obj[key];
    return acc;
  }, {});
}

export { lowercaseKeys };
