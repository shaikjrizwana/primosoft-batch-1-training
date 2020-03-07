
function objectKeys(object) {
  const array = [];
  for (var key in object) {
    array.push(key);
  }
  if(Array.isArray(array)){
    return array;
  }
}

export {
  objectKeys,
};
