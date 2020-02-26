const sumArray = (...args) => args.reduce((acc, el) => acc + el, 0);

describe('arraySum test', () => {
  test('should sum the array of numbers', () => {
    const numbers = [1, 2, 3, 4, 5];
    const sum = sumArray(...numbers);

    expect(sum).toEqual(10);
  });
});
