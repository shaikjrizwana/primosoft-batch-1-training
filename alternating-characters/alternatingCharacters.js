function alternatingCharacters(arr) {
  return arr.reduce((acc, string, index) => {
    let count = 0;
    for (let j = 0; j < string.length - 1; j++) {
      if (string[j] == string[j + 1]) {
        count++;
      }
    }
    acc.push(count);
    return acc;
  }, []);
}

export { alternatingCharacters };
