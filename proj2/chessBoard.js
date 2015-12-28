var myBoard = "";

for (var i = 1; i <= 72; i++) {

  if (i % 9 === 0) {
    myBoard += "\n";
  }
  else if (i % 2 === 0) {
    myBoard += "#";
  }
  else {
    myBoard += " ";
  }
}

console.log (myBoard);
