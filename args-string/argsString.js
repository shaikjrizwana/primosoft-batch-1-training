
function argsString(string, arr) {
  return arr.reduce((result, val) => {
    result = result.replace('{}', val);
    return result;
  }, string);
}

export {
  argsString,
};
