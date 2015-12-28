// Count "B" in a string

// function countBs(str){
//   var count = 0;
//
//   for (i = 0; i < str.length; i++){
//     if (str.charAt(i) === "B"){
//       count++;
//     }
//   }
//
//   return count;
// }
//
// console.log(countBs("This is my first sentence! BBBB"));


function countChar(str, ch){
  var count = 0;

  for (i = 0; i < str.length; i++){
    if (str.charAt(i) === ch){
      count++;
    }
  }

  return count;

}

function countBs(str){
  return countChar(str, "B");
}

console.log(countBs("This is my first sentence! BB"));
