
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }
}

Person.prototype.addDobDigits = function addDobDigits() {
  const digits = this.dateOfBirth.split('').filter((ele) => ele !== '/');
  const sum = digits.reduce((result, value) => result + parseInt(value, 10), 0);
  return sum;
};
export {
  Person,
};
