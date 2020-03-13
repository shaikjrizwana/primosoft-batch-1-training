
function doubleOddNumbers(array) {
  return array.filter((val) => val % 2 !== 0).map((val) => val * 2);
}

export {
  doubleOddNumbers,
};
