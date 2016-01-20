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

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});


    for (person in byName) {
        console.log (person)
    }
