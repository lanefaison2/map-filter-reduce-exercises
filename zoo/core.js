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

  if(!options) {

    var map = data.animals.reduce(animalsByRegion, {'NE':[], 'NW':[],'SE':[],'SW':[]});
    return map;
// GREAT EXAMPLE OF HOW TO: use reduce to push items to obj of arrays
    function animalsByRegion(accumulator, currentValue, index, array) {

      // Set variables to make function more readable
      var loc = currentValue.location;
      var Name = currentValue.name;

      accumulator[loc].push(Name);
      return accumulator;
    }
  }

  else if (options.includeNames && !options.sex) {

    var map = data.animals.reduce(animalsByRegion, {'NE':[], 'NW':[],'SE':[],'SW':[]});
    return map;

    function animalsByRegion(accumulator, currentValue, index, array) {

      // Set variables to make function more readable
      var loc = currentValue.location;
      var Name = currentValue.name;
      var animal = currentValue;

      var animalNames = {};
      accumulator[loc].push(animalNames);

      animalNames[animal.name] = animal.residents.map(function (resident) {
        // At this point you are inside of animals.residents, so you only need to interate over EACH resident!
        return resident.name;
      });
      return accumulator;
    }
  }
  else if (options.includeNames && options.sex) {

    var map = data.animals.reduce(animalsByRegion, {'NE':[], 'NW':[],'SE':[],'SW':[]});
    return map;

    function animalsByRegion(accumulator, currentValue, index, array) {

      // Set variables to make function more readable
      var loc = currentValue.location;
      var Name = currentValue.name;
      var animal = currentValue;

      var animalNames = {};
      accumulator[loc].push(animalNames);

      animalNames[animal.name] = animal.residents.filter(function (resident) {
      // this will give us just the female animals, but we get the entire object back.
        return resident.sex === options.sex
      }).map(function(resident) {
        return resident.name;
      });

      return accumulator;
    }
  }
  else if (options.sex) {

  }
};

// *********************************************************

function animalPopularity (rating) {
  var animals = data.animals;

  if (!rating) {

    var popularity = animals.reduce(getPopularity, {'2':[],'3':[],'4':[],'5':[]});
    return popularity;

    function getPopularity(accumulator, currentValue, index, array) {

      accumulator[currentValue.popularity].push(currentValue.name);
      return accumulator;
    }
  } else {

    var popularity = animals.filter(function (animal) {
      return animal.popularity == rating;
    }).map(function (animal) {
      return animal.name;
    })
    return popularity;
  }
}

// *********************************************************

function animalsByIds (ids) {
  // your code here
};

// *********************************************************

function animalByName (animalName) {
  if (!animalName) {
    return {};
  } else {

    console.log(data.animals.find(findByName));

    function findByName(element, index, array) {

      for (var i = 0; i < element.residents.length; i++) {
        if (element.residents[i]['name'] = animalName) {
        return element.residents[i];
        }
      }

    }
  }
}

// *********************************************************

function employeesByIds (ids) {
  if (!ids) {
    return [];
  }};

// *********************************************************

function employeeByName (employeeName) {
  if (!employeeName) {
    return {};
  }};

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
