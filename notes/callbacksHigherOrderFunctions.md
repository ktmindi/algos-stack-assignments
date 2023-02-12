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
Another way we can do this with higher order functions is like so..
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
Extra practice utilizing this strategy create a function that takes in a callback function and multiplies each number in the array by 2.
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
Create a function subtractTwo that accepts a number and returns that number minus 2.

Then create a function map that takes two inputs - an array of numbers (a list of numbers) a 'callback' function - this function is applied to each element of the array (inside of the function 'map')
Have your map function return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. Please do not use the native map or forEach method.
``` javascript
//input - array and callback function
//output - new array
function subtractTwo(num){
  return num - 2;
}
function map(array,callback){
  //create new array
  const output = []
  //iterate through passed in array
  for (let i=0; i<array.length;i++){
    const twos = callback(array[i]);
    output.push(twos);
  }
  //run callback on each element in the array
  //push to new array
  //return new array
  return output;
}

//Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]
```
___
### `Challenge: forEach`
#### Part 1
Create a function forEach which takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything. Please do not use the native forEach or map method.
#### Part 2
Now let's rebuild map from the previous challenge. This time instead of using a for loop, you're going to use the forEach we just created.
``` javascript
//input - array and callback function
//output - new array
function subtractTwo(num){
  return num - 2;
}
function map(array,callback){
  //create new array
  const output = []
  //iterate through passed in array
  for (let i=0; i<array.length;i++){
    const twos = callback(array[i]);
    output.push(twos);
  }
  //run callback on each element in the array
  //push to new array
  //return new array
  return output;
}

//Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]
```




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