
function rejectPromise() {
  const promise = new Promise((resolves) => {
    resolves('REJECTED!');
  });
  return promise;
}

export {
  rejectPromise,
};
