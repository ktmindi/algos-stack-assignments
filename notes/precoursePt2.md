# These notes will cover basics such as variables, strings, data types, arrays, and loops

## Arrays - Examining Elements
- One way we can store multiple values in a single place is by using an array denoted by square brackets []
- Indexing starts at 0 and therefore to call a single element from our array we can use 
``` JAVASCRIPT
let friends = ['George', 'Thai', 'Brandon'];
console.log(friends[2]); // should log: 'Brandon'
``` 
**Built in functions**
- length - tells us how many elements are in an array
- push - add an element to the END of the array
- pop - remove an element from the END of the array

``` JAVASCRIPT
let numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers); // should log: [1, 2, 3, 4, 5]

numbers.pop();
console.log(numbers); // should log: [1, 2, 3, 4]
console.log(numbers.length); // should log 4
```
___
## For Loops - Fundamentals
- Loops will allow you to write a block of code once, and repeat the execution of the code for a given number of times.
- iterate through the array = use a loop 
```JAVASCRIPT
for (let i = 0; i < 10; i++) {
  // code to be repeated goes here
}
```
- 'for' keyword tells Javascript we want to run a loop
- Right after the for we enclose a few conditions separated by semicolons
    - (1) Initial expression - Here we initialize any expression(expression: bit of js code that evaluates to a single value)
        - Often used to declare a variable in this case i
        - This variable is used as a counter for how many times the loop iterates
    - (2) Conditional expression - this expression should evaluate to a true or false
        - when this condition is true the loop will execute the block of code inside the curly braces that follow the conditions
        - when this condition is false - the loop will stop and move on with executing the code below it
    - (3) Increment expression - this expression should increment your loop counter as the loop runs. 
        - This will be executed after the code inside of the loop block is run
    - Once the loop conditions are declared we can move onto inserting the code that we will want to be repeated inside the curly braces. This code will again be executed until #2 returns false


## Looping through an Array
- Remember that a value of an array can be accessed using the INDEX of its position starting at 0 therefore we let our intial expression i = 0
```JAVASCRIPT
const myArray = ['string1', 'string2', 'string3'];

for (let i = 0; i < myArray.length; i++) {
  console.log( myArray[i] );
}
```
- Here we have declared that our loop will start at index 0, run as long as the index is less than the length of the array, and increment our loop by 1
- Since we are using i as an index, inside our code block we can reference the current element of an array using myArray[i]

- Using a for loop, decrement countDown by one each time the loop runs until it equals 0, making use of looping functionality instead of logging each number separately.
```JAVASCRIPT
let countDown = 10;
// ADD CODE HERE

//this will give us 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 LOGGING EACH NUMBER SEPARATELY which is not what we want
//for(countDown; countDown>0; countDown--){
//  console.log(countDown);
//}

//this one is correct - it will console.log 0 when we call the last line
for (let i=1; i<=10; i++){
  countDown--;
}
// Uncomment the below line to check your work
console.log("countdown", countDown) // -> should print 0;
```

## Challenge: For Loops and Arrays
1. Iterate through the synonyms array using a for loop, pushing a greeting string with the format "Have a [synonym] day!" into the greetings array.

2. Use a second for loop to iterate through the greetings and console.log() each greetings.
```JAVASCRIPT
const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
for (let i = 0; i < synonyms.length; i++){
  greetings.push(`Have a ${synonyms[i]} day!`);
}

// 2. 
// Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE
for (let i = 0; i<greetings.length; i++){
  console.log(greetings[i]);
}
```

3. For this challenge, loop through the arrays and push a string with the format "My name is [firstName] [lastName] and I am from [place]" into the array holding the respective bios.
``` JAVASCRIPT
const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];


const bios = [];

// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'

// ADD CODE HERE
for (let i=0; i<firstNames.length;i++){
  bios.push(`My name is ${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}`);
}
console.log(bios);
```
___
## While Loops Fundamentals
1. Use a while loop to increment count by 2 on each repetition of the block of code. Run the code block of your while loop until count is 8.
``` JAVASCRIPT
let count = 2;
// ADD CODE HERE
while (count<8){
  count += 2
}

// Uncomment these to check your work!
console.log(count); 
```

2. Initialize a variable addThis to 0 and a variable sum to 0. Use a while loop to repeat a code block as long as addThis is less than 10. In the code block, add the value of addThis to sum, then increment addThis by 1. After the while loop runs, the value of sum should be the sum of the numbers 0 through 9.
``` JAVASCRIPT
// ADD CODE HERE
let addThis = 0;
let sum = 0;

while (addThis<10){
  sum += addThis;
  addThis++;
}
// Uncomment the line below to check your work!
console.log(sum);
```

___
## Control Flow - if statements
- Using an if statement, we can execute a block of code if the condition inside the parentheses is met.
- If we wanted to chain more if statements together, we could use an else if block.
- Finally we can also use an else statement to catch anything that your if and else if conditions don't meet.

1. Use an if statement to check if num is greater than 100. If num is greater than 100, reassign the value of final to null. Otherwise, set final to be two times the value of num.
``` JAVASCRIPT
const num = 40;
let final;
// ADD CODE HERE

if (num>100){
  final = null;
}else{
  final = num*2;
}

// Log final to the console below to check your work
console.log(final);
```

- When i is inside **square brackets** you are calling for the `VALUE at INDEX I` myArray[i] => will give you the value at that index
- When i is inside **parenthesis** like below, you are calling for the `VALUE of INDEX` => will output the number assigned to i

2. Challenge fizzbuzz ~ Use a loop to iterate through the numbers 1 through 16. Push each number into fb, but push the string "fizz" in place of numbers divisible by 3, "buzz" in place of numbers divisible by 5, and "fizzbuzz" in place of numbers divisible by both 3 and 5.
``` JAVASCRIPT
const fb = [];
for (let i = 1; i<=16; i++){
  if (i%3===0 && i%5===0){
    fb.push('fizzbuzz');
  }else if(i%3===0){
    fb.push('fizz');
  }else if(i%5===0){
    fb.push('buzz')
  }else{
    fb.push(i);
  }
}
console.log(fb)

// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]
```
___
## Control Flow and Iteration
1. Iterate through the array and multiply a number by 10 if it is greater than or equal to 5.
``` JAVASCRIPT
const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];
// ADD CODE HERE
for (let i=0; i<timesTenIfOverFive.length; i++){
  if (timesTenIfOverFive[i] >=5){
    timesTenIfOverFive[i] *= 10;
  }
}

// Uncomment the line below to check your work!
console.log(timesTenIfOverFive); // -> should print [230, 90, 110, 2, 100, 60]
```
___
## Objects - Examining Properties
- Objects are data structures used to store related data represented with **keys** and associated **values**
- Keys are also referred to as **properties**. 
- Keys give us an easy way to reference the values, so they are almost always descriptive strings. 
- Values can be any valid data type: a number, string, array, and other objects

### `FOR...IN`
> Do not use for in over an Array **if the index order is important** [In this instance its better to use a **for** loop, a **for of** loop, or **Array.forEach()** when order is important]
- The for in statement can loop over array values
```JAVASCRIPT
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x] + ",";
}
console.log(txt); // => 45,4,9,16,25
```
- The javascript for in statement loops through the properties of an object
``` JAVASCRIPT
const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " "; //adding the value at index x of person to the txt string
}
console.log(txt); // => John Doe 25
```
```JAVASCRIPT
//Another way to look at the code above for more clarification
const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
  console.log("x", x); //console.log x will give us the KEY values: fname, lname, age
  console.log("person[x]", person[x]); //console.log [x] will give us the values associated with the KEY at index x: John, Doe, 25
}
console.log(txt);
```


### `OBJECT.KEYS() METHOD`
- Object.keys() returns an Array Iterator object with the keys of an object
```JAVASCRIPT
//Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = Object.keys(fruits);
console.log(keys); // => ['0','1','2','3']
```

1. You are provided with an object called checkObj. Using a for... in loop, determine if the object contains the property foundNum. If it exists, reassign the value of found to 1
``` JAVASCRIPT
const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

let found = 0;
// ADD CODE HERE
for (let x in checkObj){
  if (x === "foundNum"){
    found = 1;  // do not use let found = 1 because let cannot be reassigned only changed
  }
}
console.log(found) // => 1
```

### Objects - Iterating with for...in
2. You are provided with an empty array called objToArray. Using a for... in loop, fill the array with all of the numbers from the checkObj object if they are greater than or equal to 2.
``` JAVASCRIPT
const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

const objToArray = [];
// ADD CODE HERE
for (let x in checkObj){
  if (checkObj[x]>=2){
  objToArray.push(checkObj[x]);
  }
}
console.log(objToArray); // => [2,5,18]
```
### Objects - Iterating with a for loop
3. This time, use the Object.values() method to return an array of checkObj's values, and assign this array to a constant called objToArray. Next, use a for loop to iterate through objToArray and determine if any of the numbers are divisible by 6. If so, reassign the value of divBy6 to true.


``` JAVASCRIPT
const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

let objToArray = Object.values(checkObj);
console.log(objToArray);

let divBy6 = false;
// ADD CODE HERE
for (let x in objToArray){
  if (x%6==0){
    divBy6 = true;
  }
}
console.log(divBy6);
```
---
### Objects - Nested Arrays
1. You are provided with an empty array called nestedArr. Using a for loop starting at index 0, add 5 subarrays to nestedArr, with each nested array containing the string 'loop' concatenated with the corresponding index in nestedArr as its first element, and the index as its second element. Example of a subarray: ['loop3', 3].
```javascript
const nestedArr = [];
// ADD CODE HERE
for (let i=0;i<5;i++){
  nestedArr.push([`loop${i}`,(i)]);
}
console.log(nestedArr); //=> [['loop0', 0], ['loop1', 1], ['loop2', 2], ['loop3', 3], ['loop4', 4]]
```
---
### Objects - Adding Properties
1. You are provided with an array, possibleIterable. Using a for loop, build out the object divByThree so that each key is an element of possibleIterable that is divisible by three. The value of each key should be the array index at which that key can be found in possibleIterable.
``` javascript
const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};
// ADD CODE HERE
for (let i = 0; i<possibleIterable.length; i++){
  if (possibleIterable[i]%3 === 0){
    divByThree[possibleIterable[i]]=i; //first we access our object divByThree, then using bracket notation we are going to assign it a new property which is going to be our current element which is possibleIterable at index i, and we are going to assign it a value '=i' which is going to be our current index which is represented by i
  }
}
console.log(divByThree); // => { 3: 1, 6: 3, 9: 2 }
```

---
### Objects - Evaluating Keys
1. You are given an object called sumMe containing several key/value pairs and a variable called total whose initial value is 0. Using a for... in loop, iterate through the keys of sumMe; if the value corresponding to a key is a number, add it to total.
``` javascript
const sumMe = {
  hello: 'there',
  you: 8,
  are: 7,
  almost: '10',
  done: '!'
};
let total = 0;
// ADD CODE HERE

for (let x in sumMe){
  if (typeof (sumMe[x]) === "number"){
    total += sumMe[x];
  }
}
console.log(total); // => 15

```

---


### H3
## H2
# H1
~~STRIKE THROUGH~~
**Bolded**

*Italicized*
`highlighted words`
 - D
 >Quoted Block

 ```JAVASCRIPT
var myName JAVASCRIPT CODE
 ```