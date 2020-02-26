
function isEven(a) {
  var q;
  q=Math.ceil(a/2);
  if((q*2)==a){
    return true;
  }
  else{
    return false;
  }
  
}

export {
  isEven,
};
