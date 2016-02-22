// Your code here.

//This is my interface

function Sequence () {
} 

Sequence.prototype.next = function () {
    
}

Sequence.prototype.isNext = function () {
    
}

// Now I implement this interface for an array and range

function ArraySeq (arrObject) {
    this.seq = arrObject;
    this.length = this.seq.length;
    this.index = 0;
}

function RangeSeq (start, finish) {
    this.start = start;
    this.finish = finish;
    this.length = this.finish - this.start + 1;
    this.current = this.start;
}

ArraySeq.prototype.next = function () {
    return this.seq[this.index++];
}

RangeSeq.prototype.next = function () {
    return this.current++;
}

ArraySeq.prototype.isNext = function () {
    return (this.index < this.length)? true : false;
}

RangeSeq.prototype.isNext = function () {
    return (this.current < this.finish)? true : false;
}

// Finally, I need to implement "display" function

function logFive (seq) {
    for (var i = 0; i < 5; i++) {
        if (seq.isNext()) {
            console.log (seq.next());
        }
        else {
            break;
        }
    }
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104