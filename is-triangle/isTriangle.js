
function isTriangle(var a,var b,var c) {

  if(a<(b+c) && b<(a+c) && c<(a+b))
	{
		return true;
	}
  else
  {
    return false;
  }

export {
  isTriangle,
};
