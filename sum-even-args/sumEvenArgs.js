/* eslint-disable linebreak-style */
function sumEvenArgs(...numbers) {
  return numbers.filter((num) => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}

export { sumEvenArgs };
