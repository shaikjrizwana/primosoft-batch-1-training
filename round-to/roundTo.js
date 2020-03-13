function roundTo(number, noOfDecimals) {
  const extraPrecision = Math.pow(10, noOfDecimals + 1);
  const extraDigit = Math.round(number * extraPrecision) % 10;
  const applyUpFunction = extraDigit >= 5;
  if (applyUpFunction) {
    return roundTo.up(number, noOfDecimals);
  }
  return roundTo.down(number, noOfDecimals);
}

roundTo.up = function up(number, noOfDecimals) {
  const precision = Math.pow(10, noOfDecimals);
  return Math.ceil(number * precision) / precision;
};

roundTo.down = function up(number, noOfDecimals) {
  const precision = Math.pow(10, noOfDecimals);
  return Math.floor(number * precision) / precision;
};
export { roundTo };
