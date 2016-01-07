// This function returns an array where elements are in a reverse order
// compared with input array

function reverseArray (inArr){
    var outArr = [];

    var length = inArr.length;

    for (var i = 0; i < length; i++) {
        outArr.push(inArr.pop());
    }

    return outArr;
}

// This function create a reverse array without creating a new array object

function reverseArrayInPlace (inArr) {
    // Define vars

    var end = inArr.length - 1;
    var lower, upper;

    for (i = 0; i < inArr.length/2; i++) {
        lower = inArr[i];
        upper = inArr[end - i];

        inArr[i] = upper;
        inArr[end - i] = lower;
    }
}

// Test functions

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
