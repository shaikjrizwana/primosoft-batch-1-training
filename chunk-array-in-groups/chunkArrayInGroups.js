
function chunkArrayInGroups(arr, size) {
  const finalArray = [];
  let chunkedArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    chunkedArray.push(arr[i]);
    
    if (chunkedArray.length === size) {
      finalArray.push(chunkedArray);
      chunkedArray = [];
    }
  }
  if (chunkedArray.length > 0) {
    finalArray.push(chunkedArray);
  }
  return finalArray;
}

export {
  chunkArrayInGroups,
};
