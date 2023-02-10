# Callbacks & Higher-order Functions
### Functions like map, reduce and filter are powerful tools and keep our code DRY but can be complex to navigate. We will learn how to build these functions from scratch so you can easily implement and debug them in your code.
---
### Definitons
- Callback: In Javascript a callback is a function that is passed as an argument to another function.
- Higher-order Function: A function that takes at least one function as input and/or returns a function as output.
<br>
*** *keep in mind that both are just normal JS functions* ***

### Example
```JAVASCRIPT
const array = [1, 2, 3];

//higher-order function
function update(callback) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    const updated = callback(array[i]);
    output.push(updated);
  }

  return output;
}

// Callback functions
function add10(num) {
  return num + 10;
}

function multiplyBy20(num) {
  return num * 20;
}

function stringify(num) {
  return num.toString();
}

// Call update with each callback function
update(add10) // returns [11, 12, 13]
update(multiplyBy20) // returns [20, 40, 60]
update(stringify) // returns [‘1’, ‘2’, ‘3’]
```
- add10 is the callback because
    - It is used as input in another function call.
    - It is called inside of the other function
- update is the higher-order function because
    - It takes a function as an argument.
    - It calls its input function when it is called. Hence, the term "callback" as one function call leads to another.

### Usage
- callbacks and higher-order functions are almost always used in web applications because they solve a general set of code duplication problems

### Example
Lets say we are asked to manipulate an array of data by adding 10 to each integer. Then we realize we need to add 20 to each of the integers too.
```javascript
const array = [1,2,3];
const output = [];
for (let i=0;i<array.length;i++){
    const updated = array[i] + 10;
    output.push(updated);
}
console.log(output); //prints [11,12,13]
```
We could change the function a little bit to get the output we need but we are essentially copy and pasting the same code before.

```javascript
const array = [1,2,3];
const output = [];
for (let i=0;i<array.length;i++){
    const updated = array[i] + 20;
    output.push(updated);
}
console.log(output); //prints [21,22,23]
```
There are a few issues with this method, starting with breaking the DRY Principle. [<mark>Dont Repeat Yourself</mark>]
- its inefficient because we have to store duplicate code in memory

### Solution
When we notice that we are writing code that repeats except for one small part we can turn it into a function.
- The function body will contain the repetitive code block
- Its parameter will replace the one thing we want to change
- If we want to change the number we are adding, just replace all instances of that number with the parameter num


```javascript
const array = [1, 2, 3];

function addNum(num) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    const updated = array[i] + num;
    output.push(updated);
  }

  return output;
}

console.log(addNum(10)); // prints [11, 12, 13]
console.log(addNum(20)); // prints [21, 22, 23]
```
- we are delivering a function that will calculate any possible addition you could throw at it and did it by abstracting away one number

### One Step Further
What if we want to perform other operations like subtraction or more complex manipulation?
- Functions cannot take operators like + and - as parameters, so that's one limiting factor.
- In Javascript functions are first-class citizens which means functions can be passed as input to other functions (as well as returned from other functions, modified, and assigned to variables)
    - This gives developers the ability to use functions as parameters, which we refer to as callbacks
    - If a num parameter allows us to use any number [like 10 to 20] then a function parameter allows us to use any functionality [like adding, subtracting, or more complex manipulation]
```javascript
const array = [1,2,3];

function update(callback){
    const output = [];
    for (let i =0; i<array.length; i++){
        const updated = callback(array[i]);
        output.push(updated);
    }

    return output;
}
//callback functions
function add10(num){
    return num + 10;
}
function multiplyBy20(num){
    return num * 20;
}
function stringify(num){
    return num.toString();
}

//call update with each callback function
update(add10) // returns [11, 12, 13]
update(multiplyBy20) // returns [20, 40, 60]
update(stringify) // returns [‘1’, ‘2’, ‘3’]
```
- this small change now allows us to use any function - called a callback, when we run the update function
- this makes update a higher-order function because it now takes a callback as input

### MAP Function in Javascript
- this update function is essentially the built-in map function in Javascript
- given a callback, **map** will output a new array where each element is the output of a call to the callback.

___
### `Challenge: pluralize`
Create a function pluralize that takes an array of strings as input and returns a new array with an "s" added to the end of each string in the input array. For example, if the string "carrot" is in the input array, it should become the string "carrots" in the output array.

The body of the pluralize function should employ a single for loop that pluralizes each string in the input array..
``` javascript
//input - array
//output - new array
function pluralize(arr){
  //create new array
  const output = [];
  //iterate through loop
  for (let i = 0; i<arr.length; i++){
  //add s to each element and push to new array
  	const element = arr[i] + 's';
  	output.push(element);
  //return new array
  }
  return output;
}
// Uncomment these to check your work!
const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]
```
```javascript
function pluralize(array,callback){
  //Create a newArr 
  const newArr = [];
  //Iterate over passed-in arr
  for (let i=0; i<array.length; i++){
  //Run callback on each element, push to newArr
    const answer = callback(array[i]);
    newArr.push(answer);
  }
  //Return newArr
  return newArr;
}
//Test Case:
// console.log(pluralize(fruits));

function addS(str){
  return str + 's';
}
console.log(pluralize(fruits,addS))
```
```javascript
function timesTwo(num){
  return num*2;
}

function multiply(array,callback){
  //create new array
  const output = [];
  //iterate over passed in array
  for (let i=0; i<array.length;i++){
    const twos = callback(array[i]);
    output.push(twos);
  }
  return output;
  //run callback on each element, push to new array
  //return new array
}

//test case
const numbers = [23,4,245];
console.log(multiply(numbers,timesTwo))
```
___
### `Challenge: map`
Create a function pluralize that takes an array of strings as input and returns a new array with an "s" added to the end of each string in the input array. For example, if the string "carrot" is in the input array, it should become the string "carrots" in the output array.

The body of the pluralize function should employ a single for loop that pluralizes each string in the input array..
``` javascript
//input - array
//output - new array
function pluralize(arr){
  //create new array
  const output = [];
  //iterate through loop
  for (let i = 0; i<arr.length; i++){
  //add s to each element and push to new array
  	const element = arr[i] + 's';
  	output.push(element);
  //return new array
  }
  return output;
}
// Uncomment these to check your work!
const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]
```
# ***forEach***
- `forEach` is just an iterative function/method like a *for loop*, except it runs a ***function*** that you provide, on every single element in the array. 

```javascript
function forEach(array, callbackFn) {
   //Iterate over array
    for (let i = 0; i < array.length; i++) {
        //Run callback function on each element
        let element = array[i]
        callbackFn(element)
    }
}
```

### Arrow Function Syntax: 

```javascript
function add5(num){
      return num + 5;
}
//Same As: 
const add5 = num => {
      return num + 5;
}
//Same As:
const add5 = num => num + 5; 
```
- Note: Arrow functions written on ONE line, do not need the `return` keyword.


# ***map***
- `map` is jsut an iterative function/method that creates a **new array**.
- It fills the new array with the *results/outputs* of running a ***function*** that you provide, on every single element in the `input` array.
- The `map` function takes in two inputs:
   
1. `array`
2. `callbackFn`
```javascript
function map(array, callbackFn){
        //New array to hold results 
        const resultsArray = [];
        //Iterate over array, forEach is an iterative method
        forEach(array, (element) => {
                //For each element, run cbFn
                let result = callbackFn(element);
                //Push results to array
                resultsArray.push(result);
        })
        //Return array 
        return resultsArray;
}
```


- We want to iterate over the array, and run the callback function on each element. 
- Instead of using a `for-loop`, we use instead a `forEach` function.
  - The `forEach` function takes in two inputs:
      - a. `array`: Same array passed into `map` in this case
      - b. `function`:   (element) => **callBackFn**(element)
```javascript
(element) => {
        callBackFn(element)
}
//Same As: 
function(element){
        callBackFn(element)
}
```
> forEach test case:
```javascript
const testArray = ['a','b','c']
//printEl prints out the input passed-in
function printEl(element){
    console.log(element)
}
forEach(testArray,printEl) // => ['a','b','c']
```
>map test case:
```javascript
const testArray2 = [3,4,5]

function minusTwo(num){
      return num -2;
}
console.log(map(testArray2,minusTwo)) //=> [1,2,3]
```
>Walkthrough of map
```javascript
function map(array, callbackFn) {
    const resultsArray = [];
    forEach(array, (element) => {
        let result = callbackFn(element);
        resultsArray.push(result);
    })
    return resultsArray;
}
//Test Cases:
const testArray2 = [3,4,5]

function minusTwo(num){
      return num -2;
}
console.log(map(testArray2,minusTwo)) //=> [1,2,3]
```
1. We initalize `resultsArray` to an empty array. []
2. We iterate through our input array using the `forEach`
```javascript
forEach([3,4,5], (element) )
```
>This is saying we are invoking the `forEach` function. For each element in the array `[3,4,5]`, we'll run a function for each element. The parameter we'll call each element will be `(element)`. 
3. In our `(element)=>`  function body, we then run the `callBackFn` passed into `map` on each `element`. 
```javascript
forEach(array, (element) => {             // array == [3,4,5]
        let result = callbackFn(element); //callBackFn == minusTwo
        resultsArray.push(result);
    })
    return resultsArray;
```
4. We push the result of this into our resultsArray.
5. Return resultsArray.






### H3
## H2
# H1
~~STRIKE THROUGH~~
**Bolded**

<mark>HighlightedWord</mark>

*Italicized*

`highlighted words`
 - D
 >Quoted Block

 ```JAVASCRIPT
var myName JAVASCRIPT CODE
 ```