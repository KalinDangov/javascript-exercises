const repeatString = function (string, num) {
  let newString = "";
  if (num < 0) {
    newString = `ERROR`;
  } else if (num >= 0) {
    for (i = 0; i < num; i++) {
      newString += string;
    }
  }
  return newString;
};

// Do not edit below this line
module.exports = repeatString;
