function createStudent(obj) {
  const { likesJavaScript, likesES2015 } = obj || {};
  if (likesJavaScript === false && likesES2015 === false) {
    return 'The student does not like much...';
  }
  if (likesES2015 === false) {
    return 'The student likes JavaScript!';
  }
  if (likesJavaScript === false) {
    return 'The student likes ES2015!';
  }
  return 'The student likes JavaScript and ES2015';
}

export { createStudent };
