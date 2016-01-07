// function deepEqual compares two values or objects by value

function deepEqual (obj1, obj2) {

    if (obj1 == undefined || obj2 == undefined) {
//        console.log ("first " + obj1 + " | " + obj2);
        return false;
    }
    else if (obj1 === obj2) {
//        console.log ("two " + obj1 + " | " + obj2);
        return true;
    }
    else if (typeof obj1 !== "object" || typeof obj2 !== "object"){
//        console.log ("three " + obj1 + " | " + obj2);
        return false;
    }
    else {
//        console.log ("four " + obj1 + " | " + obj2);
        for (var key in obj1) {
//            console.log ("Inside loop: " + obj1[key] + " | " + obj2[key]);
            return deepEqual (obj1[key], obj2[key]);
        }
    }

}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(obj, {there: {is: "an"}, object: 2}));

