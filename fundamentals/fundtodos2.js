// Fundamentals To Do 2



// Countdown

// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

//Countdown 
function countdown(num){
    //Create a new array 
    let countArr = [];
    //Iterate down starting at num, adding each num to array 
    for(let i = num;i>=0;i--){
        countArr.push(i);
    }
    console.log("Length of Array: ",countArr.length);
    return countArr;
}
//Test Cases: 
console.log(countdown(5));





// Print and Return

// Your function will receive an array with two numbers. Print the first value, and return the second.
function printReturn(arr){
    console.log(arr[0]);
    return arr[1];
}
 
printReturn([1,2]);








// First Plus Length

// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

function firstPlusLength(array){
    //Check if first element in array is a number 
    if(typeof array[0] === 'number'){
    //If it is, add first val of array plus arrays length
      return array[0] + array.length;
    }else{
  //If it's not, log to the console 'this is not a number!'
      return 'This is a not a number!';
    }
    
}
let testArr = [true,4,5,6,7];
let testArr2 = [10,4,5,6,7];

let sumOfFirstAndLength = firstPlusLength(testArr2);
console.log(sumOfFirstAndLength);







// Values Greater than Second

// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.
function greaterThan2(array){
    let values = array.slice(2);
    console.log('Number of Values : ', values.length);
    return values;
}
  //Test Cases:
console.log('General Approach: ')
console.log(greaterThan2([1,3,5,7,9,13]))








// Values Greater than Second, Generalized

// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?
function greaterThanSecond(array){
    let greater = [];
    //Store the second value of arr in a variable 
    let secondVal = array[1];
    //Iterate over array comparing second value to each element 
    for(let i=0;i<array.length;i++){
      if(array[i]>secondVal){
        greater.push(array[i]);
      }
    }
    console.log(greater.length);
    return greater;
}
  
//Test Cases:
console.log('greater than 2nd challenge:')
console.log('valuesGreaterThanSecond Problem:')
const secondArr =  [1,33,0,100,234,211]
console.log(greaterThanSecond(secondArr))


 

// This Length, That Value

// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.

//Inputs: num1, num2
//Output: array 
//Length of this array = num1  
//Each element of this array is num2

function disLengthDatValue(num1,num2){
    //Check if num1 and num2 are the same, if so print 'Jinx!'
    if(num1 === num2) return 'Jinx!'
    
    //Create an array to return 
    let newArray = [];
    for(let i = 0;i<num1;i++){
      newArray[i] = num2;
    }
    return newArray;
  }
  //Test Cases:
  console.log('This Length That Value Problem: ')
  
  console.log(disLengthDatValue(3,5)); // => [5,5,5]
  console.log(disLengthDatValue(5,5)); // => 'Jinx!'


// Fit the First Value

// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".

function fitTheFirst(array){
    if(array[0]>array.length){
        console.log("Too Big")
    } else if(array[0]<array.length){
        console.log("Too Small")
    } else {
        console.log("Just Right")
    }
}

let testfit = [4, 1, 2]
let testfit1 = [2, 1, 4, 8, 4]
let testfit2 = [4, 2, 1, 6]
fitTheFirst(testfit)
fitTheFirst(testfit1)
fitTheFirst(testfit2)










// Fahrenheit to Celsius

// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.

function fahrenheitToCelsius(fDegrees){
    return (fDegrees - 32) * (5/9);
}

let testCase = fahrenheitToCelsius(48)
console.log("Celsius:", testCase)




// Celsius to Fahrenheit

// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.

function celsiusToFahrenheit(cDegrees){
    return (9/5 * cDegrees) + 32;
}
let testCase1 = celsiusToFahrenheit(39)
console.log("Fahrenheit", testCase1)

// (Optional): Do Fahrenheit and Celsius values equate at a certain number? The scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value.

for (let c = 200; c >= -200; c--) {
    let f = (9/5) * c + 32;
    if (c == (f - 32) * (5/9)) {
        console.log(c + "°C is equal to " + f + "°F");
    }
}