function permutateWithRepetitions(charArray) {
   return generatePermutations(charArray, charArray.length);
}

function generatePermutations(charArray, permutationLength) {
  if (permutationLength === 1) {
    return charArray.map((char) => [char]);
  }
  const permutations = [];

  const smallPermutations = generatePermutations(
    charArray,
    permutationLength - 1,
  );

  charArray.forEach((char) => {
    smallPermutations.forEach((smallPermutation) => {
      permutations.push([char].concat(smallPermutation));
    });
  });
  return permutations;
}
export { permutateWithRepetitions };
