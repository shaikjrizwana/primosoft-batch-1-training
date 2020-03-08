function alternatingCharacters(arr) {
  const minNoOfDeletions = [];
  for (let i = 0; i < arr.length; i++) {
    const string = arr[i];
    let count = 0;
    for (let j = 0; j < string.length - 1; j++) {
      if (string[j] == string[j + 1]) {
        count++;
      }
    }
    minNoOfDeletions.push(count);
  }
  return minNoOfDeletions;
}

export { alternatingCharacters };
