function onlyEven (array) {
return array.filter(function (num, index, array) {
  return num % 2 == 0;
})};

// ********************************************************

function onlyOneWord (array) {
  return array.filter(noSpaces);

  function noSpaces(currentValue,index,array) {
    if (currentValue.indexOf(' ') >= 0) {
      return false;
    };
    return true;
  };
};

// ********************************************************

function positiveRowsOnly (array) {
  return array.filter(noNegativeRows);

  function noNegativeRows(currentValue,index,array) {
    for (var i = 0; i < currentValue.length; i++) {
      if (currentValue[i] < 0 ) {
        return false;
      }
    }
    return true;
  }

};

// ********************************************************

function allSameVowels (array) {

// Ryan's Method
// function allSameVowels (array) {
//   return array.filter(function(item) {
//     var vowelsArray = item.match(/[aeiou]/g);
//
//     return vowelsArray.every(function(item, _, collection) {
//       var vowel = collection[0];
//       return item === vowel;
//     });
//   });
// };








  var sameVowel = array.filter(isolateVowels);
  var vowels = ['a','e','i','o','u'];
  return sameVowel;

  function isolateVowels(currentValue, index, array) {
    if (array[index].includes('a')) {
      if (array[index].includes('e')) {
        return false;
      } if (array[index].includes('i')) {
        return false;
      } if (array[index].includes('o')) {
        return false;
      } if (array[index].includes('u')) {
        return false;
      }
      return true;
    }
    if (array[index].includes('e')) {
      if (array[index].includes('a')) {
        return false;
      } if (array[index].includes('i')) {
        return false;
      } if (array[index].includes('o')) {
        return false;
      } if (array[index].includes('u')) {
        return false;
      }
      return true;
    }

    if (array[index].includes('i')) {
      if (array[index].includes('e')) {
        return false;
      } if (array[index].includes('a')) {
        return false;
      } if (array[index].includes('o')) {
        return false;
      } if (array[index].includes('u')) {
        return false;
      }
      return true;
    }
    if (array[index].includes('o')) {
      if (array[index].includes('e')) {
        return false;
      } if (array[index].includes('i')) {
        return false;
      } if (array[index].includes('a')) {
        return false;
      } if (array[index].includes('u')) {
        return false;
      }
      return true;
    }
    if (array[index].includes('u')) {
      if (array[index].includes('e')) {
        return false;
      } if (array[index].includes('i')) {
        return false;
      } if (array[index].includes('o')) {
        return false;
      } if (array[index].includes('a')) {
        return false;
      }
    return true;
    };
  };
};


module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
