
function alternatingCharacters(strings) {
  const final = strings.reduce((result, string) => {
    const arr = string.split('');
    const arr1 = string.split('');
    let deletions = 0;
    let i = 0;
    for (let index = 1; index < arr.length; index++) {
      if (arr[i] === arr[index]) {
        arr1.splice(index, 1);
        arr1[index] = '';
        deletions += 1;
      } else {
        i = index;
      }
    }
    result.push(deletions);
    return result;
    
  }, []);
  return final;
}

export {
  alternatingCharacters,
};
