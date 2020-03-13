
function placeInMiddle(array1, array2) {
  const index = array1.length / 2;
  array1.splice(index, 0, ...array2);
  return array1;
}

export {
  placeInMiddle,
};
