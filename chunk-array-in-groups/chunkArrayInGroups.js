
function chunkArrayInGroups(arr, size) {
  const finalArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (i % size === 0) {
      finalArray.push(arr.slice(i, i + size));
    }
  }

  return finalArray;
}

export {
  chunkArrayInGroups,
};
