function objectKeys(obj) {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  if (Array.isArray(keys)) {
    return keys;
  }
}

export { objectKeys };
