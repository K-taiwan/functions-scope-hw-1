/* 
sumDigits = (num) => {
    
    num = num.toString().split('');
    console.log(typeof num);
    



}

console.log(sumDigits(42)); */


function sumDigits(num) {
    test = num.toString().split('');
    console.log(test);
}

console.log(sumDigits(42)); 

// grab Number
// change number to String
// split the number to two seperate Array
// find a way to add together

function sumDigits() {
    let num = [];
    num = num.toString().split('');
    
    console.log(num);
}

console.log(sumDigits(42)); 


function sumDigits(num) {
    var string = num.toString(); // var numString = '-1234'
    var array = 0;
    var sum = 0;
    if (num < 0) { //if num is negative
      sum -= Number(string[1]); // sum = 0 - (2) = -2
      array += 2; // starting = 0 + 2 = 2
    }
    for (var i = array; i < string.length; i++) { // i = 2, i = 3, i = 4
      sum += Number(string[i]); // sum = -2 + (2) = 0, sum = 0 + 3 = 3, sum = 4 + 4 = 8
    }
    return sum;
  }
  
  console.log(sumDigits(9100)); // 8