# These notes will cover basics such as variables, strings, data types, arrays, and loops

### Arrays - Examining Elements
- One way we can store multiple values in a single place is by using an array denoted by square brackets []
- Indexing starts at 0 and therefore to call a single element from our array we can use 
```
let friends = ['George', 'Thai', 'Brandon'];
console.log(friends[2]); // should log: 'Brandon'
```
** Built in functions **
- length - tells us how many elements are in an array
- push - add an element to the END of the array
- pop - remove an element from the END of the array

```
let numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers); // should log: [1, 2, 3, 4, 5]

numbers.pop();
console.log(numbers); // should log: [1, 2, 3, 4]
console.log(numbers.length); // should log 4
```

### For Loops - Fundamentals
- Loops will allow you to write a block of code once, and repeat the execution of the code for a given number of times.
```
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


### Looping through an Array
- Remember that a value of an array can be accessed using the INDEX of its position starting at 0 therefore we let our intial expression i = 0
```
const myArray = ['string1', 'string2', 'string3'];

for (let i = 0; i < myArray.length; i++) {
  console.log( myArray[i] );
}
```
- Here we have declared that our loop will start at index 0, run as long as the index is less than the length of the array, and increment our loop by 1
- Since we are using i as an index, inside our code block we can reference the current element of an array using myArray[i]

- Using a for loop, decrement countDown by one each time the loop runs until it equals 0, making use of looping functionality instead of logging each number separately.
```let countDown = 10;
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

### Challenge: For Loops and Arrays
1. Iterate through the synonyms array using a for loop, pushing a greeting string with the format "Have a [synonym] day!" into the greetings array.

2. Use a second for loop to iterate through the greetings and console.log() each greetings.
```
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
```
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

### While Loops Fundamentals
1. Use a while loop to increment count by 2 on each repetition of the block of code. Run the code block of your while loop until count is 8.
```
let count = 2;
// ADD CODE HERE
while (count<8){
  count += 2
}

// Uncomment these to check your work!
console.log(count); 
```


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