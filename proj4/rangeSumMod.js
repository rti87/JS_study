/* this is a program for ch. 4 range/sum exercise.
Function "range" returns an array that includes all numbers from "start" to "end".
Function "sum" returns the sum of all numbers in the array.
*/

function withinRange (start, end, num) {
    if (num >= start && num <= end) {
        return true;
    }
    else {
        return false;
    }
}

function range(start, end, step) {

  var numRange = [];

    var iStart = 0, iEnd = 0, i = 0;

  if (step === undefined) {
      if (start > end) {
          step = -1;
      }
      else {
        step = 1;
      }

  }

    if (start > end && step < 0) {
        iStart = end;
        iEnd = start;
    }
    else if (start < end && step > 0) {
        iStart = start;
        iEnd = end;
    }
    else {
        console.log ("Input parameters are invalid");
        return false;
    }


    var value = start;
    while (withinRange (iStart, iEnd, value))
    {
        numRange.push(value);
        value += step;
  }


  console.log (step);
  return numRange;
}

// Check how "range" works

console.log (range(10, 1, -3));


// Now we need to sum up all numbers in the range

function sum (inArr) {
    var outSum = 0;

    for (var i = 0; i < inArr.length; i++) {
        outSum += inArr[i];
    }

    return outSum;
}

console.log (sum(range(10, 1, -3)));
