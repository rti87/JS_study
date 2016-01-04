/* this is a program for ch. 4 range/sum exercise.
Function "range" returns an array that includes all numbers from "start" to "end".
Function "sum" returns the sum of all numbers in the array.
*/

function range(start, end) {
  var length = end - start + 1; // "1" makes this range inclusive

  var numRange = [];

  for (var i = 0; i < length; i++) {
    numRange[i] = start + i;
  }

  return numRange;
}

// Check how "range" works

//console.log (range(1, 10));


// Now we need to sum up all numbers in the range

function sum (inArr) {
    var outSum = 0;

    for (var i = 0; i < inArr.length; i++) {
        outSum += inArr[i];
    }

    return outSum;
}

console.log (sum(range(1, 10)));
