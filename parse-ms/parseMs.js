
function parseMs(ms) {
  let s = Math.floor(ms / 1000);
  let m = Math.floor(s / 60);
  s %= 60;
  let h = Math.floor(m / 60);
  m %= 60;
  const d = Math.floor(h / 24);
  h %= 24;
  const millis = Math.floor((ms % 1000) * 1000) / 1000;
  const object = {
    days: d, hours: h, minutes: m, seconds: s, milliseconds: millis,
  };
  if (ms < 0) {
    return (Object.keys(object).reduce((res, key) => {
      res[key] = -(object[key]);
      console.log(res);
      return res;
    }, {}));
  }
  return object;
}

export {
  parseMs,
};
