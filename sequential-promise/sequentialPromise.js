
function sequentialPromise(promises) {
  return promises.reduce((result, promise) => result.then(promise), Promise.resolve());
}

export {
  sequentialPromise,
};
