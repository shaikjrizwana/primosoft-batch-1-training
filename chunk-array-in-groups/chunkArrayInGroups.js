
function chunkArrayInGroups(arr, size) {
  const finalArraySize = Math.ceil(arr.length / size);
  const emptyFinalArray = new Array(finalArraySize).fill('');
  return emptyFinalArray.map((chunk, index) => arr.slice(index * size, (index + 1) * size));
}

export {
  chunkArrayInGroups,
};
