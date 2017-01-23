function sum (array) {
return array.reduce(function (a,b) { return a + b; })};

// ****************************************************
// Multiply all items within a matrix together
function productAll (array) {
//(function, accumulator)
  return array.reduce(multiply,1);

  function multiply(accumulator, currentValue, index, array) {
    return accumulator * array[index].reduce(function (a,b) {return a*b});
  };
};

// ****************************************************
// A great example of how to reduce an array of arrays into an object.
function objectify (array) {
  var newObject = {};
  var getNewObject = array.reduce(arrToObj, {});
  return getNewObject;

  function arrToObj(accumulator, currentValue, index, array) {
    accumulator[currentValue[0]] = currentValue[1];
    return accumulator;
  }
};

// ****************************************************
// A great example of how to reduce an array into a string
function luckyNumbers (array) {

// Set the opening string as the accumulator to add the array elements to.

  var fortune = array.reduce(getNumbers, 'Your lucky numbers are: ');
  return fortune;

// All four parameters get used below
  function getNumbers(accumulator, currentValue, index, array) {
    if (index == array.length -1) {
      return accumulator + 'and ' + currentValue;
    }
    else {
      return accumulator + currentValue + ', ';
    }
  }


};

// ****************************************************

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
