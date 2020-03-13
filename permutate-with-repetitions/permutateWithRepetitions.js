function permutateWithRepetitions(charArray) {
  const permutation = '';
  const finalArray = [];
  printPermutations(charArray, permutation, finalArray);
  return finalArray;
}
function printPermutations(charArray, permutation, finalArray) {
  if (charArray.length === permutation.length) {
    const array = permutation.split('');
    finalArray.push(array);
    return finalArray;
  }
  for (let i = 0; i < charArray.length; i += 1) {
    printPermutations(charArray, permutation + charArray[i], finalArray);
  }
}
export {
  permutateWithRepetitions,
};
