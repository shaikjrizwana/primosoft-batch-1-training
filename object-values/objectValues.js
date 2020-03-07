function objectValues(obj) {
  const arr = [];
  for (const i in obj) {
    arr.push(obj[i]);
  }
  if (Array.isArray(arr)) {
    return arr;
  }
}
export {
  objectValues,
};
