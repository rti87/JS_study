// My code is below

//Constractor

function Vector (x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function (otherVector) {
    var newObj = {};
    newObj.x = this.x + otherVector.x;
    newObj.y = this.y + otherVector.y;
    return newObj;
}

Vector.prototype.minus = function (otherVector) {
    var newObj = {};
    newObj.x = this.x - otherVector.x;
    newObj.y = this.y - otherVector.y;
    return newObj;
}

Object.defineProperty (Vector.prototype, "length", {
    get: function() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow (this.y, 2));
    }
}); 

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5