
function objectDefaults(object, defaultobject) {
  for (const key in defaultobject) {
    if (!(key in object)) {
      object[key] = defaultobject[key];
    }
  }
  return object;
}

export {
  objectDefaults,
};
