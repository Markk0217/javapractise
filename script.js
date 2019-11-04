// 01-stringCompare.js

var firstString = "tired";
var secondString = "exhausted";


if (firstString === "exhausted"){
   console.log('they are equal')
 } else{
   console.log('they are not equal')
 }


// 02-numberCompare.js

var num = 2;
var num1 = 3;

if (num === 3){
   console.log('they are equal')
} else if (num > 3){
   console.log('not equal')
} else{
   console.log('not equal')
}


// 03-functionCombine.js

function addNumber(firstNumber, secondNumber){
    console.log("Result: " + (firstNumber + secondNumber));
}

addNumber(20, 100);

function addNumberAndReturn(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

console.log(addNumberAndReturn(60,20));


// 04-functionConditions.js

function box(num){
  if (num === 1){
    return "cola";
  }
  else if (num === 2){
    return "sprite";
  }
  else {
      return "empty";
  }
}

console.log(box(1));
console.log(box(2));
console.log(box(3));
console.log(box(4));


// 05-randomWords.js

var myArray = ["I", "am", "cute", "flight", "may", "delay"];
var randomIndex = Math.floor( Math.random() * myArray.length );
console.log(randomIndex);

console.log(myArray[randomIndex]);
