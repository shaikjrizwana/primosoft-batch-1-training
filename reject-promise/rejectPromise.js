function rejectPromise(...args) {
  const promise = new Promise((reject) => {
    reject('REJECTED!');
  });
  return promise;
}

export { rejectPromise };
