/* eslint-disable linebreak-style */

class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }
}


Person.prototype.addDobDigits = function addDobDigits() {
  const { dateOfBirth } = this;
  const stringDigitsInDob = dateOfBirth.split('').filter((char) => char !== '/');
  const DigitsInDob = stringDigitsInDob.map((str) => parseInt(str, 10));
  const sumOfDigitsInDob = DigitsInDob.reduce((sum, num) => sum + num, 0);
  return sumOfDigitsInDob;
};

export {
  Person,
};
