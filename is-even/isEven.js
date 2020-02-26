
function isEven(num) {
  var quot;
  quot = Math.floor(num / 2);
  if (quot * 2 == num) {
    return true;
  }
  return false;
}

export {
  isEven,
};
