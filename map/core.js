function multiplyBy10 (array) {
  return array.map(function(element) { return element*10;})
};

// *********************************************************

function shiftRight (array) {
  return array.map(shift);

  function shift(currentValue, index, array) {
    if (index == 0) {
      index = array.length - 1;
      return array[index];
    } else {
      index = index - 1;
      return array[index];
    };
  };
};

// *********************************************************

function onlyVowels (array) {
  var vowels = array.map(getVowels);
    return vowels;

  function getVowels(word, index, array) {

    newWord = "";
  // try refactoring with the filter method?
    for (var i = 0; i < word.length; i++) {
      if (word[i] == 'a') {
        newWord += word[i];
      } else if (word[i] == 'e') {
        newWord += word[i];
      } else if (word[i] == 'i') {
        newWord += word[i];
      } else if (word[i] == 'o') {
        newWord += word[i];
      } else if (word[i] == 'u') {
        newWord += word[i];
      }
    }
    return newWord;
  };
};

// *********************************************************

function doubleMatrix (array) {
  var newMatrix = array.map(double);
  return newMatrix;

  function double(currentValue, index, array) {
    for (var i = 0; i < currentValue.length; i++) {
      currentValue[i] = currentValue[i]*2;
    }
    return currentValue;
  }
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
