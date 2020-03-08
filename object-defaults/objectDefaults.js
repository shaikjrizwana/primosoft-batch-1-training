function objectDefaults(obj, defaultObj) {
  return Object.keys(defaultObj).reduce((acc, key) => {
    if (!(key in acc)) {
      acc[key] = defaultObj[key];
    }
    return acc;
  }, obj);
}

export { objectDefaults };
