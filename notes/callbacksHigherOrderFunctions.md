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