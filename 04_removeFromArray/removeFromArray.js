const removeFromArray = function (array, ...remove) {
  let newArray = [];
  for (const arr of array) {
    if (!remove.includes(arr)) {
      newArray.push(arr);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
