function min(one, two){
  // console.log (one + "  ---  " + two);
  // console.log (Number(one));
  // if (Number(one) || Number(two)){
  //   return undefined;
  // }
  if (Number(one) <= Number(two)){
    return one;
  }
  else {
    return two;
  }
}

console.log(min(0/0,5));
