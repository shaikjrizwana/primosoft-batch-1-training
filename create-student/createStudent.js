
function createStudent(obj) {
  if (obj === undefined) {
    return 'The student likes JavaScript and ES2015';
  }
  const { likesES2015, likesJavaScript } = obj;
  if (likesES2015 === undefined) {
    return 'The student likes ES2015!';
  }
  if (likesJavaScript === undefined) {
    return 'The student likes JavaScript!';
  }
  if (!(likesES2015 && likesJavaScript)) { return 'The student does not like much...'; } 
}

export {
  createStudent,
};
