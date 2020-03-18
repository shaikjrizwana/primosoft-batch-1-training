function timeout(str) {
  return new Promise((resolve) => {
    setTimeout(resolve(`Hello ${str}`), 500);
  });
}

export { timeout };
