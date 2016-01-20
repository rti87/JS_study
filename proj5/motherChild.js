/*
    The following two functions were provided as a starting point
*/

var myFile = require('./ancestry.js');
//console.log(myFile);

//var ancestry = JSON.parse(ANCESTRY_FILE);
var ancestry = JSON.parse(myFile);

// The "average" function goes through the etire data set and calculates
// age difference for those people, whos mothers have info (they are objects)
// in the ancestry file.

function average(array) {

    function difference(sum, person) {

      return (sum + (person.born - byName[person.mother].born));
    }

    return array.reduce(difference, 0) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// ***** My code starts here *****

// Create a new array of people whos mothers are also in the original data set.

function mapKids (newArray){

    return newArray.filter(function (person) {

        return (person.mother in byName);
    });

}


console.log (average (mapKids (ancestry)));

// → 31.2
