
function alphabeticShift(string) {
  const charArray = string.split('');
  for (let index = 0; index < string.length; index += 1) {
    const asciiVal = string.charCodeAt(index);
    charArray[index] = String.fromCharCode(asciiVal + 1);
  }

  return charArray.join('');
}

export {
  alphabeticShift,
};
