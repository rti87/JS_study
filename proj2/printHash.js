// I will use two FOR loops to print a triangle of hashes

for (var i = 1; i <= 7; i++) {

  var printHash = "";

  for (var j = 0; j < i; j++) {
    printHash += "#";
  }

  //Now our printHash contains the required number of char to pring

  console.log (printHash);
}
