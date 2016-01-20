/*
Need to write two functions:
"every" that return true if all elements satisfies a predicate function passed
"some" that returns true if any element satisfies a predicate function
*/

function every (array, func){

    function test (prev, curr) {
        return (prev && func(curr));
    }

    return array.reduce (test, true);
}

// The following function works, but it doesn't satisfy one condition: it doesn't stop
//  on the first element that returns true

//function some (array, func) {
//
//    function test (prev, curr) {
//        return (prev || func(curr));
//    }
//
//    return array.reduce (test, false);
//}

// This version should do it

function some (array, func) {

    var valid = false;

    for (index in array) {

        if (func (array[index])) {
            valid = true;
            break;
        }
    }

    return valid;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
