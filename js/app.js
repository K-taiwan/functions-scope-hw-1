// What is the difference between a parameter and an argument?
parameter are the variables listed as part of the function
argument are values passed that will invoke
// Within a function, what is the difference between return and console.log?
return stops the code and shows what is commanded
console.log shows what is being passed at that instant in console.

// What are the implications of the ability of a function to return a value?
assign to a variable and reuse over and over

// Write a function checkPalindrome that accepts a single argument, a string. Yes, you've done it before, but do it again. Later in this assignment we're gonna beef up our palindrome function some. See if you can do it without looking back at your previous answer. The function should return true if the string is a palindrome, false if not. Make sure your function will give the correct answer for words with capital letters.



checkPalindrome = (string) => {
  let reverseString = string.toLowerCase().split('').reverse('').join('');
  console.log(reverseString);
  console.log(string);
  string = string.toLowerCase();
  console.log(string);
  if(string === reverseString){
      return true;
  } else {
      return false;
  }
}
console.log(checkPalindrome("Radar"));


// Write a function sumDigits that accepts a number and returns the sum of its digits.
/* 
sumDigits = (num) => {
    
    num = num.toString().split('');
    console.log(typeof num);
    console.log(num);
    num = num[0] + num[1];
    console.log(num);
}

console.log(sumDigits(42)); */


// function sumDigits(n) {
//     return (n - 1) % 9 + 1;
//   }
//   console.log(sumDigits(42));

// var sumDigits = 42,
//     sum = 0;

// while (sumDigits) {
//     sum += sumDigits % 10;
//     sumDigits = Math.floor(sumDigits / 10);
// }

// console.log(sumDigits(42));

// let value = 42,
//     sum = 0;

// while (value) {
//     sum += value % 10;    // sum = sum +(value % 10);
//     console.log(sum);
//     console.log(value + 'S');
//     value = Math.floor(value / 10);
//     console.log(value + 'T')
// }

// console.log(sum);


function sumDigits(num) {
    let string = num.toString(); 
    console.log(typeof string);
    console.log(string);
    let array = 0;
    let sum = 0;
    // console.log(typeof array);
    // console.log(typeof sum);
    
    for (let i = array; i < string.length; i++) { 
      // sum += Number(string[i]); 
      sum += Number(string[i]); 
    }
    return sum;
  }
  
  console.log(sumDigits(42)); 

//   Write a function calculateSide that takes two arguments: sideA and sideB, and returns the solution for sideC using the Pythagorean theorem.

// hint: discover the Pythagorean Theorem on a website called google.com

// hint: checkout the Math methods in javascript

// restriction: for this problem, do NOT use Math.hypot() (but for the rest of time, once you've done this problem feel free)

function calculateSide(sideA,sideB) {
  sideC = (Math.pow(sideA,2)) + (Math.pow(sideB,2));
  sideC = Math.sqrt(sideC);
  return sideC;
}
console.log(calculateSide(8,6));