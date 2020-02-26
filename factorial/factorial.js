
function factorial(n) {
    var f = 1;
    var i;
    for(i=1;i<=n;i++){
      f = f*i;
    }
    return f;
}

export {
  factorial,
};
