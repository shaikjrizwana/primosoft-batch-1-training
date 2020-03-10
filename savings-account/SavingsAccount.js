/* eslint-disable no-underscore-dangle */

function SavingsAccount(_accountNumber, _email, _firstName, _lastName) {
  this._accountNumber = _accountNumber;
  this._email = _email;
  this._firstName = _firstName;
  this._lastName = _lastName;
  this.products = [];
  if (this._accountNumber.length != 6) {
    throw new Error('Account Number must be a 6-digit number');
  }
  if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(this._email))) {
    throw new Error('Invalid e-mail');
  }
  if (!(this._firstName.length > 3 && this._firstName.length < 20)) {
    throw new Error('First name must be between 3 and 20 characters long');
  }
  if (!(/^[a-zA-Z]+$/.test(this._lastName))) {
    throw new Error('Last name must contain english alphabets only');
  }
}

export {
  SavingsAccount,
};
