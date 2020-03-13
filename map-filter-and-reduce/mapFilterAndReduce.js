
function mapFilterAndReduce(arr) {
  return arr.map((obj) => (obj.firstName)).filter((name) => (name.length < 5)).reduce((result, name) => {
    result[name] = name.length;
    return result;
  }, {});
}

export {
  mapFilterAndReduce,
};
