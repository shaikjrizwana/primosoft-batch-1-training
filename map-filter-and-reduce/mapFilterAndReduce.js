
function mapFilterAndReduce(array) {
  return array.map((obj) => obj.firstName).filter((val) => val.length < 5).reduce(
    (result, value) => {
      result[value] = value.length;
      return result;
    }, {},
  );
}

export {
  mapFilterAndReduce,
};
