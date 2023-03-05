const sumAll = function (fromNum, toNum) {
  let sum = 0;
  if (!Number.isInteger(fromNum) || !Number.isInteger(toNum)) return "ERROR";
  if (fromNum < 0 || toNum < 0) return "ERROR";
  if (fromNum > toNum) {
    const stored = toNum;
    toNum = fromNum;
    fromNum = stored;
  }
  for (i = fromNum; i <= toNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
