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




