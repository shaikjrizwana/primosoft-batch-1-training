
function sumEvenArgs(...args) {
  return args.filter((val) => val % 2 === 0).reduce((result, element) => {
    result += element;
    return result;
  }, 0);
}

export {
  sumEvenArgs,
};
