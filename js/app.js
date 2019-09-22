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

// Write a function sumArray that takes an array as an argument. The array should contain numbers. The function should return the sum of the numbers in the array. Do not use .reduce().

function sumArray(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));

const sumArray = (array) => {
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum
}
console.log(sumArray([1, 2, 3, 4, 5, 6])); 

// A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, go here. To test whether a number is Prime, you only need to test as far as the square root of that number. This is advisable for optimization and testing large numbers.

// Step One
// Write a function called checkPrime that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not. Hint: Check every number up to the square root. To do this, try a for loop.

const checkPrime = (num) => {
  // remove problem 1 and 2 so doesnt bog problem
  if (num === 1){
    return false;
  } else if (num === 2){
    return true;
  } else { //must let i = 2 and we start from 2 above. if 0 the return will just stop loop
    for (let i = 2; i < num; i++){
      if (num % i === 0){
        return false;
      } 
    }
    return true;
  }
}

console.log(checkPrime(3));
console.log(checkPrime(5));
console.log(checkPrime(97));
console.log(checkPrime(100));





// Step Two
// Write another function called printPrimes that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97. This function can call on the previous checkPrime function.

const printPrimes = (newNum) => {
    
  //dont get how to remove 0 from showing
  for (let i = 1; i <= newNum; i++){
      let notPrime = false;
      for (let k = 2; k <= i; k++){
          if (i % k === 0 && k !== i){
              notPrime = true;
          // return notPrime;
          }
      }
      if (notPrime === false){
        
          console.log(`${i}`);
      } 
  }
  
}
printPrimes(97);




// Hungry for more?
// Complete the afternoon lab.

// Write a function insertDash that accepts a number as a parameter and returns a string with a dash inserted between any consecutive odd numbers. There should not be a dash at the end, it goes only between numbers.

// console.log(insertDash(454793));

// => 4547-9-3
// Commit.
// Write a function reverseString that takes a string as a parameter and returns that string with the letters reversed without using .split(), .reverse(), or .join().

// Commit.

// Make your palindrome function from problem two above work regardless of spacing (or capitalization). So, for example, "Sit on a potato pan Otis" or "Bird rib" would pass the test.

// Commit.

// Make your palindrome function work even if the string contains punctuation. So: "Sit on a potato pan, Otis!!!" or "A man, a plan, a canal: Panama." or "Cigar? Toss it in a can! It is so tragic." would pass the test.

// Commit.

// Make a "word palindrome" function that returns true if the words in a phrase are the same backwards and forwards. It should not care about spacing, capitalization, or punctuation. For example the following string would pass the test:

// "Son, I am able," she said. "Though you scare me, watch!" said I, "Beloved," I said, "watch me scare you!" Though, said she: "able am I, son."

// Commit.

// You still want more?!?! Do you even sleep? Create an account on Project euler and keep working on those problems.

