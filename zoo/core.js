var data = require("./data");

function entryCalculator (entrants) {
  if (!entrants || entrants === {}) {
    return 0;
  } else {
  var total = Object.keys(entrants);
  var cost = 0;
  total.forEach(function (currentValue, index, total) {
    cost += data.prices[total[index]] * entrants[total[index]];
  });
  return cost;
  };
};

// *********************************************************

function schedule (dayName) {

  var days = Object.keys(data.hours);
  clearSchedule = {};

  days.forEach(writeSchedule);
  function writeSchedule(_, i, days) {
    if (data.hours[days[i] ].open == 0) {
      clearSchedule[days[i] ] = "CLOSED";
    }
    else {
      clearSchedule[days[i] ] = "Open from " + data.hours[days[i] ].open + "am until " + (data.hours[days[i] ].close - 12) + "pm";
    }
  }

  if (!dayName) {
    return clearSchedule;
  }
  else {
    var day = {};
    day[dayName] = clearSchedule[dayName];
    return day;
  }
};

// *********************************************************

function animalCount (species) {
  var animalObject = {};
  data.animals.forEach(addAnimal);
  function addAnimal(animal, i, species) {
    animalObject[data.animals[i].name] = data.animals[i].residents.length;
  }
  if (!species) {
    return animalObject;
  } else {
    return animalObject[species];
  }
};

// *********************************************************

function animalMap (options) {
  var map = {};
  var areas = [];
  
  console.log(areas);


};

// *********************************************************

function animalPopularity (rating) {
  // your code here
};

// *********************************************************

function animalsByIds (ids) {
  // your code here
};

// *********************************************************

function animalByName (animalName) {
  // your code here
};

// *********************************************************

function employeesByIds (ids) {
  // your code here
};

// *********************************************************

function employeeByName (employeeName) {
  // your code here
};

// *********************************************************

function managersForEmployee (idOrName) {
  // your code here
};

// *********************************************************

function employeeCoverage (idOrName) {
  // your code here
};

// *********************************************************

module.exports = {
  entryCalculator: entryCalculator,
  schedule: schedule,
  animalCount: animalCount,
  animalMap: animalMap,
  animalPopularity: animalPopularity,
  animalsByIds: animalsByIds,
  animalByName: animalByName,
  employeesByIds: employeesByIds,
  employeeByName: employeeByName,
  managersForEmployee: managersForEmployee,
  employeeCoverage: employeeCoverage
}
