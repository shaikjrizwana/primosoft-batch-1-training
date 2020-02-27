
function rectangleDiagonal(length, breadth) {
  var lenDiag, sumOfSquares;
  sumOfSquares = Math.pow(length, 2) + Math.pow(breadth, 2);
  lenDiag = Math.sqrt(sumOfSquares);
  return lenDiag;
}

export {
  rectangleDiagonal,
};
