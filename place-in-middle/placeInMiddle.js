
function placeInMiddle(arr, MiddleArray) {
  const startArray = arr;
  const endArray = startArray.splice(Math.floor(startArray.length / 2));
  return startArray.concat(MiddleArray, endArray);
}

export {
  placeInMiddle,
};
