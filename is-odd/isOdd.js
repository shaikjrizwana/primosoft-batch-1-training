
function isOdd(n) {
var q = Math.ceil(n/2);
if((q*2)==n){
  return false;
}
else{
  return true;
}
}

export {
  isOdd,
};
