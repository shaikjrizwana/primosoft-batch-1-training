
function lowercaseKeys(object) {
  return Object.keys(object).reduce((result, key) => {
    result[key.toLowerCase()] = object[key];
    return result;
  }, {});
}

export {
  lowercaseKeys,
};
