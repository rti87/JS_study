var arrays = [[1, 2, 3], [4, 5], [6]];

// Per book tips, I'm going to use reduce and concatination

console.log (arrays.reduce(function (first, second) {
    return first.concat (second);
}));
// → [1, 2, 3, 4, 5, 6]
