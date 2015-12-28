// I'll use one loop with nested if statements to print numbers from 1 to 100
// where I print "Fizz" when a number is divisible by 3 and 5 if it is
// dibisible by 5, but not 3
// and "FizzBuzz" when it is divisible by 3 and 5

var one = Date.now();

for (var number = 1; number <= 100; number++){

  // If number is divisible by 3

  if (((number % 3) === 0) && ((number % 5) === 0)){
    console.log ("FizzBuzz");
  }
  else if ((number % 3) === 0) {
    console.log ("Fizz");
  }
  else if ((number % 5) === 0) {
    console.log ("Buzz");
  }
  else {
    console.log (number);
  }
}

var two = Date.now();

console.log ("runtime is: " + (two - one));
