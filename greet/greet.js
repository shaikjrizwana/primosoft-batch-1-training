
function greet(...args) {
  const promise1 = new Promise((resolve, reject) => {
    resolve(`Hey ${args}`);
  });
  return promise1;
}

export {
  greet,
};
