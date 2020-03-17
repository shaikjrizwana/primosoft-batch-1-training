
function greet(str) {
  const promise = new Promise((resolve) => {
    resolve(`Hey ${str}`);
  });
  return promise;
}

export {
  greet,
};
