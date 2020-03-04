function rectangleDiagonal(length, breadth) {
  const sumOfSquares = Math.pow(length, 2) + Math.pow(breadth, 2);
  return Math.sqrt(sumOfSquares);
}

export {
  rectangleDiagonal,
};