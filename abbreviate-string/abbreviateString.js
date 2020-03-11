
function abbreviateString(string) {
  if(typeof string == "string"){
    const f = string.indexOf(' ');
    const i = string.lastIndexOf(' ');
    return string.slice(0,f) + ' ' + string[i+1].toUpperCase() + '.';
  }
  else{
    throw new Error();
  }
}

export {
  abbreviateString,
};
