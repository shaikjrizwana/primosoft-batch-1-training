
function applyOperator(...args) {
  if (args.length == 0) {
    throw new SyntaxError();
  }
  var operator = args[0];
  var result;
  if (args.length == 1) {
    return 0;
  }

  switch (operator) {
    case '+':
      result = args[1];
      for (var i = 2; i < args.length; i++) {
        result += args[i];
      }
      break;
    case '-':
      result = -args[1];
      for (var i = 2; i < args.length; i++) {
        result -= args[i];
      }
      break;
    case '*':
      result = args[1];
      for (var i = 2; i < args.length; i++) {
        result *= args[i];
      }

      break;
    case '/':
      result = args[1];
      for (var i = 2; i < args.length; i++) {
        result /= args[i];
      }
      result = result.toFixed(4);
      result = parseFloat(result);
      break;
    case '%':
      result = args[1];
      for (var i = 2; i < args.length; i++) {
        result %= args[i];
      }
      break;
  }
  return result;
}

export {
  applyOperator,
};
