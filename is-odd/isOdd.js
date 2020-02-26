
function isOdd(num) {
  var quot;
  quot = Math.floor(num / 2);
  if (quot * 2 == num) {
    return false;
  }
  return true;
}

export {
  isOdd,
};
