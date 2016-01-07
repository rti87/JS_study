// arrayToList: it creates a list from an array

function arrayToList(arr) {

    var link = null;
    var obj;

    for (var i = arr.length - 1; i >= 0; i--) {
        obj = {
            value: arr[i],
            rest: link
        };
        link = obj;
    }

    return obj;
}


// listToArray: similar to the previous function, but takes list and creates an array

function listToArray(list) {

    if (list === null || list === undefined) {
        return null;
    }
    var arr = [];
    var pointer = list;

    do {

        arr.push(pointer.value);
        pointer = pointer.rest;
    } while (pointer !== null);

    return arr;
}

// prepend: this function adds a given object to the front of a given list

function prepend(num, pointer) {

    return {
        value: num,
        rest: pointer
    };
}

// nth: this function return n-th element from the list

function nth(list, index) {

    var pointer = list;

    for (var i = 0; i < index; i++) {

        pointer = pointer.rest;
    }

    return pointer.value;
}

function nthRec(list, index) {

    if (index === 0) {
        return list.value;
    } else {
        return nthRec(list.rest, index - 1);
    }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nthRec(arrayToList([10, 20, 30]), 2));
// → 20
