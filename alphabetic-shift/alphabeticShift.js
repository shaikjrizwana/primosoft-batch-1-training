
function alphabeticShift(str) {
  const charArray = str.split('');
  charArray.map((char, index) => {
    const asciiVal = char.charCodeAt(0);
    charArray[index] = String.fromCharCode(asciiVal + 1);
  });
  return charArray.join('');
}

export {
  alphabeticShift,
};
