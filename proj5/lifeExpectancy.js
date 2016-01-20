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
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// My code

var sortedData = [];

function lifeByCentury () {

    var century = 0;

    for (var i = 0; i < ancestry.length; i++){
        century = Math.ceil(ancestry[i].died / 100);
        if ( century in sortedData) {
            sortedData[century].push (ancestry[i].died - ancestry[i].born);
        } else {
            sortedData [century] = [];
            sortedData[century].push (ancestry[i].died - ancestry[i].born);
        }
    }

    return sortedData;
}

function findLifeExpectancy() {

    var newData = lifeByCentury();

    for (century in sortedData) {
        console.log(century + ": " + average(sortedData[century]));
    }

    return true;
}

console.log (findLifeExpectancy());
