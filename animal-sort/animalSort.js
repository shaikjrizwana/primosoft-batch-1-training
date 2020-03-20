
function animalSort(arr) {
  return arr.sort((ele1, ele2) => {
    if (ele1.numberOfLegs === ele2.numberOfLegs) {
      const name1 = ele1.name.toLowerCase();
      const name2 = ele2.name.toLowerCase();
      return name1 < name2 ? -1 : name1 > name2 ? 1 : 0;
    }
    return ele1.numberOfLegs - ele2.numberOfLegs;
  });
}

export {
  animalSort,
};
