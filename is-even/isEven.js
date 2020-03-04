function isEven(num) {
  const quotient = Math.floor(num / 2);
  return quotient * 2 == num;
}

export { isEven };
