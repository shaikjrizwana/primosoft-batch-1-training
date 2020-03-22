
function animalSort(arr) {
  return arr.sort((a, b) => {
    if (a.numberOfLegs === b.numberOfLegs) {
      return a.name > b.name ? 1 : -1;
    }
    return a.numberOfLegs - b.numberOfLegs;
  });
}

export {
  animalSort,
};
