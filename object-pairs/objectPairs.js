function objectPairs(obj) {
  const pairs = Object.entries(obj);
  if (Array.isArray(pairs) && Array.isArray(pairs[0])) {
    return pairs;
  }
}

export { objectPairs };
