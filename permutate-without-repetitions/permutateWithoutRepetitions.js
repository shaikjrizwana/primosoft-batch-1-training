function printPermutations(charArray, permutation, index, finalArray) {
  if (charArray.length === permutation.length) {
    const array = permutation.split('');
    finalArray.push(array);
    return finalArray;
  }
  for (let i = 0; i < charArray.length; i += 1) {
    if (!(index.includes(i))) {
      printPermutations(charArray, permutation + charArray[i], index + i, finalArray);
    }
  }
}
function permutateWithoutRepetitions(charArray) {
  const permutation = '';
  const index = '';
  const finalArray = [];
  printPermutations(charArray, permutation, index, finalArray);
  return finalArray;
}
export {
  permutateWithoutRepetitions,
};
