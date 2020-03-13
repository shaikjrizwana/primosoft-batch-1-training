
function tripleAndFilter(array) {
  return array.map((val) => val * 3).filter((val) => val % 5 === 0);
}

export {
  tripleAndFilter,
};
