//This is just a simple program to check if a number if even

function isEven(num){
  var myNum = Number(num);
  if (myNum < 0){
    myNum *= -1;
  }
//  console.log(myNum);

  switch (myNum){
    case 0:
//      console.log("Inside 0");
      return true;
    case 1:
//      console.log("Inside 1");
      return false;
    default:
      return isEven(myNum - 2);
  }
}

console.log(isEven(-1));
//console.log(false);
