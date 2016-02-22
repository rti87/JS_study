// Your code here.

//************ Copy needed code from the book example ****************
function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += string;
  return result;
}

function TextCell(text) {
  this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function() {
  return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};
//***************** End of copy of the book example **************

// I follow example for UnderlinedCell to create this new type of object

function StretchCell (inner, targetWidth, targetHeight) {
    this.inner = inner;
    this.width = targetWidth;
    this.height = targetHeight;
}

StretchCell.prototype.minWidth = function () {
    if (this.inner.minWidth() > this.width) {
        return this.inner.minWidth();
    }
    else {
        return this.width;
    }
}

StretchCell.prototype.minHeight = function () {
    if (this.inner.minHeight() > this.height) {
        return this.inner.minHeight();
    }
    else {
        return this.height;
    }
}

StretchCell.prototype.draw = function (width, height) {
    return this.inner.draw (width, height);
}

//******************************
// Test run from the book

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]