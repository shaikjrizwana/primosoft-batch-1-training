function ackermannFunction(m, n) {
  if (m === 0) {
    return n + 1;
  }
  if (n === 0) {
    return ackermannFunction(m - 1, 1);
  }
  if (m !== 0 && n !== 0) {
    return ackermannFunction(m - 1, ackermannFunction(m, n - 1));
  }
}

function ackermann({ m, n }) {
  return ackermannFunction(m, n);
}

export {
  ackermann,
};


