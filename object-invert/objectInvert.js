
function objectInvert(object) {
  const finalObject = {};
  for (const key in object) {
    finalObject[object[key]] = key;
  }

  return finalObject;
}

export {
  objectInvert,
};
