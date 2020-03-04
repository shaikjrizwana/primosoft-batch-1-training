function factorial(num) {
  var factorialOfNum = 1;
  for (let i = 1; i <= num; i++) {
    factorialOfNum = factorialOfNum * i;
  }
  return factorialOfNum;
}

export { factorial };
