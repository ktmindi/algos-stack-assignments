# **POD Day 1 - Advanced - Draw Stairs**

Write a function that console logs a staircase of any given height where 1 <= N <= 100. The staircase must climb up from left to right. The last line should only consist of asterisks, without any leading/trailing spaces.  


For example:   

       

```
drawStairs(5) ->
    *
   **
  ***
 ****
*****
```


# POD Day 1 - Regular - Reverse String 

Create a function reverseString that accepts a string as a parameter and returns the reverse of that string.

For example: 

> reverseString("I love testing") // should return "gnitset evol I"


# **POD Day 2 - Regular - addingToX & arrayToX**

# Challenge Part 1

Create a function called `addingToX` that accepts a number as an argument.

It will return the sum of every integer from 1 up to and including the input number.

```
addingToX(0) will return 0
```

```
addingToX(1) will return 1
```

```
addingToX(2) will return 3
```

```
addingToX(3) will return 6
```

```
addingToX(4) will return 10
```

```
addingToX(5) will return 15
```

```
addingToX(10) will return 55
```

# Challenge Part 2

Write a function `arrayToX` that accepts a number as an argument.

It will return an array where each element is the return value of calling `addingToX` on each integer from 1 up to and including the input number.

```
arrayToX(1) will return [1]
```

```
arrayToX(2) will return [1, 3]
```

```
arrayToX(3) will return [1, 3, 6]
```

```
arrayToX(4) will return [1, 3, 6, 10]
```

```
arrayToX(5) will return [1, 3, 6, 10, 15]
```



# **POD Day 2 - Advanced - Modemean**

Given an array of numbers, determine if the mode and mean of the array are equivalent

 Caveats:

-  `Math.floor` the mean
-  If there are multiple modes, use the max of the modes

 

 Return true or false

















### Functions

Functions give programs complex, reusable units of behavior. Just like variables, they have to be declared. To do this, we use the function keyword. Here's an example of a function declaration:

```
function sayHello() {
  console.log('hello');
}
```
Let's make another function:

```function sayGoodbye() {
  console.log('goodbye');
}
```
Now we have two functions named sayHello and sayGoodbye. We can invoke a function by writing its name (or the name of a variable that points to it) followed by parentheses. If the function takes any arguments, we put these inside the parentheses.

```
sayHello(); // prints 'hello'
sayGoodbye(); // prints 'hello'
```

## Directions

1. With your partner, decide which of you will be driving and navigating and how often to switch roles.
2. Add your code in the editor on the left.
3. After each challenge, uncomment the console.log and run your code with the button marked "run code".
4. Make sure that the output you see in the console (the black area at the bottom left of the window) matches the expected output (what the function "should print"). If it does not, edit your code until it does.

### Function Challenges

## Challenge 1

Write a function called printDriverHeight that logs the driver's height when invoked.

## Challenge 2

Declare a function called printNavigatorName that prints the navigator's name.
The functions your wrote above are neat, but they can only log the values you hard-coded into them. We can expand the behavior of functions with parameters:

```
function howTall(height) {
  console.log('I am ' + height + ' tall');
}
howTall('5 feet'); // prints 'I am 5 feet tall'
```
In the example above, the function howTall accepts a parameter called height, and its behavior changes depending on this input. In the following ## challenges, you'll write functions with parameters.

## Challenge 3

- Declare a function called printName.
- It will take in a parameter name and print that name.
- Call printName with the driver's name as an argument.
- Call printName with the navigator's name as an argument.

## Challenge 4

- Declare a function called printGroupName.
- It will take two parameters driverName and navigatorName.
- It will print the two parameters with the word 'and' between them.
- Usually, in addition to side effects like printing things, we want our functions to return a value so that it can be used elsewhere. We can store this return value in a variable:

```
function timesTwo(age) {
  return age * 2;
}
let myAge = 26;
let twiceMyAge = timesTwo(myAge); // twiceMyAge === 52
```
If we don't use the return keyword when defining our function, it will return undefined.

```
function timesTwo(age) {
  age * 2;
}
let myAge = 26;
let twiceMyAge = timesTwo(myAge); // twiceMyAge === undefined
```
In the ## challenges below, you will write functions with return statements.

## Challenge 5

- Declare a function called multiplyHeight.
- It will take two parameters driverHeight and navigatorHeight.
- It should return the product of the heights.

## Challenge 6

- Declare a function called square..
- It will take number as a parameter.
- It will return the square of the number.

## Challenge 7

- Declare a function getArea.
- It will take radius as a parameter.
- It will use the function square to calculate the square of the radius.
- It should return 3.14 times the square of the radius.

### Comparisons

The logical operators && (and), || (or), and ! (not) help you establish powerful control flow.

- A && B evaluates to true only if A and B are both true
- A || B evaluates to true if one or both the items are true
- ! inverts a true to a false, or a false to a true

Here are some examples:

```
true && true    // true
true && false   // false
false && true   // false
false && false  // false

true  || true   // true
false || true   // true
true  || false  // true
false || false  // false

!true   // false
!false  // true
!!true  // true

let isYoung = true;
let isTall = false;

isYoung && isTall   // false
isYoung && !isTall  // true
```
When we compare two values using a comparison operator, the result is a Boolean value. JavaScript's comparison operators include the following:

- == (equals)
- === (strictly equals, in data type and value)
- != (does not equal)
- !== (strictly does not equal)
- > (greater than)
- < (less than)
- >= (greater than or equal to)
- <= (less than or equal to)

Here are some examples:

```
6 == 5    // false
6 === 5   // false
6 != 5    // true
'5' == 5  // true
'5' === 5 // false
'5' != 5  // false
'5' !== 5 // true
6 > 5     // true
!(6 > 5)  // false
6 >= 5    // true
6 >= 6    // true
6 > 6     // false
7 < 8     // true
7 <= 7    // true
```

### Control Flow

We can use a combination of Boolean expressions and control flow statements to control the flow of the program and create "if this, then that" functionality.

Here are some examples:
```
if (someCondition) {
  // code that will run if someCondition evaluates to true
}

if (someCondition) {
  // code that will run if someCondition evaluates to true
} else {
  // code that will run if someCondition evaluates to false
}

if (condition1) {
 // code that will run if condition1 evaluates to true
} else if (condition2) {
 // code that will run if condition1 evaluates to false and
 // condition2 evaluates to true
}

if (condition1) {
 // code that will run if condition1 evaluates to true
} else if (condition2) {
 // code that will run if condition1 evaluates to false and
 // condition2 evaluates to true
} else {
 // code that will run if both condition1 and condition2
 // evaluate to false
}
```
### Loops

Another type of control flow statement is a loop. We can use a loop to do things repeatedly. A for loop typically uses a variable called an iterator to do something a certain number of times.

Here is an example:
```
for (let i = 0; i < 5; i++) {
  // code that will run 5 times
}
```
A for loop typically consists of three statements:

An iterator initialization followed by a semicolon
A break condition, which will stop the loop when it evaluates to false, followed by a semicolon
An incrementation statement that changes the value of the iterator (In the example above, the ++ operator increases the value of i by 1 at the end of each loop).
```
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
// This would print 0, 1, 2, 3, 4

### Control Flow Challenges

## Challenge 8

- Write a function greeting that accepts a string name and a boolean casual.
- The function should log 'Hey ' + name if casual is true or 'Hello ' + name if casual is false.
- Call your function with the navigator's name and true.
- Call your function with the driver's name and false.
## Challenge 9

- Write a function isCodesmithOpen that accepts a time parameter (a number).
- If the time is greater than 9, log 'Codesmith is open.'
- Otherwise, log 'Sorry, Codesmith is closed.'
## Challenge 10

- Write a function smallMediumOrLarge that will accept a number howHungry, which will represent how hungry you are on a scale of 1 to 5.
- If howHungry is 5, log 'Large please!'
- If howHungry is 3 or 4, log 'Medium please!'
- Otherwise log 'Small please!'
## Challenge 11

- Write a function called isAGoodBoy that takes two parameters that we expect to be Boolean values: wellBehaved and isCute.
- If the dog is wellBehaved and isCute, log 'pet'.
- Otherwise log 'train'.
## Challenge 12

- Write a function shouldEatBanana that accepts color and smellsGood parameters.
- Log 'eat' if the banana's color is 'yellow' and if smellsGood is true
- Otherwise, if the banana's color is 'green', log 'wait'.
- Otherwise log 'don't eat'.
## Challenge 13

- Write a function countTo5 that uses a for loop to log the numbers 1 through 5.
## Challenge 14

- Write a function countMost that uses a for loop to loop over the numbers 1 to 5.
- Log all the numbers except 3.