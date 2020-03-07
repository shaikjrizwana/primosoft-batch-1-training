function objectValues(obj) {
  const values = [];
  for (var key in obj) {
    values.push(obj[key]);
  }
  if (Array.isArray(values)) {
    return values;
  }
}

export { objectValues };
