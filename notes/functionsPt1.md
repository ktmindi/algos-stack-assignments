# Functions and Execution Context
## Watch Introduction Video Notes INCOMPLETE
- sad
- sad
- asd

___
### `Challenge: addTwo`
Create a function addTwo that accepts a number, and returns the number plus 2.
``` javascript
function addTwo(num){
  return num+=2
}
console.log(typeof addTwo); // should log: 'function'
console.log(addTwo(10)); // should log: 12
```

___
### `Challenge: addS`
Create a function addS that accepts a string, and returns the string with an "s" added to the end.
``` javascript
function addS(string){
  return string+"s";
}
console.log(typeof addS); // should log: 'function'
console.log(addS('cat')); // should log: 'cats'
```

___
### `Challenge: sayHello`
Create a function sayHello that accepts a string argument and returns the string 'Hi, ' with the passed-in string added to the end.
``` javascript
function sayHello(string){
  return `Hi, ${string}`;
}
console.log(sayHello('Mary')); // should log: 'Hi, Mary'
console.log(sayHello('Haley')); // should log: 'Hi, Haley'
```


___
### `Challenge: wereAwesome`
Write a function wereAwesome that takes you and your pair programming partner's name and returns the string "[your buddy's name] and [you] are awesome!"
``` javascript
function wereAwesome(you, yourBuddy) {
  return `${yourBuddy} and ${you} are awesome!`
}

console.log(wereAwesome("Dave", "Will")); // => "Will and Dave are awesome!"
console.log(wereAwesome("Victoria", "Jenny")); // => "Jenny and Victoria are awesome!"
```


___
### `Challenge: lastLetter`
Create a function lastLetter that takes a word (string) and returns the last character/letter of that string.

Hint- Remember that each character/letter in a string has an index position that you can access with brackets- '[]'
``` javascript
function lastLetter(word) {
  return word[word.length-1];
}

console.log(lastLetter("hello")); //=> "o"
console.log(lastLetter("goodbye!")); //=> "!"
console.log(lastLetter("ZeltoiD")); //=> "D"
console.log(lastLetter("I love Javascript")); //=> "t"
```
- The function takes in a single argument "word"
- Then it uses the length property of the string to determine the index of the last character, which is **word.length - 1**. 
- This index is used to access the last character of the string using the square bracket notation. 
- The last letter is returned.

___
### `Challenge: Passing Arguments`
Examine the code given to you. Determine what arguments must be passed into isX1 and isX2 respectively to obtain an output of true for both, and pass in the arguments accordingly.
``` javascript
const x = 3;

function isX1(num) {
    const x = 5;
    return num === x;
}

function isX2(num) {
    return num === x;
}

const one = isX1(5);
const two = isX2(3); // => if you put 5 will return false because const x = 5; is only stored inside the first function

console.log(one); // should log: true
console.log(two); // should log: true
```


___
### `Challenge: Invoking Functions`
Examine the code given to you. Try to make the calls variable equal to 'JerryKramerGeorgeElaine' with only a single invocation to the function jerry.
``` javascript
let calls = "";

function jerry(str) {
    //concat str with jerry
    str += 'Jerry';
    //return the invocation of kramer method
    return kramer(str);
}

function george(str) {
    //concat str with george
    str += 'George';
    //return the invocation of elaine
    return elaine(str);
}

function elaine(str) {
    //concat str with elaine
    str += 'Elaine';
    //return str
    return str;
}

function kramer(str) {
    //concat str with kramer
    str += 'Kramer';
    //return invocation of george
    return george(str);
}


calls = jerry(calls);
console.log(calls); // should log: 'JerryKramerGeorgeElaine'
```

___
### `Challenge: makingPlans`
Create a function makePlans that accepts a string. This string should be a name. The function makePlans should call the function callFriend and return the result. callFriend accepts a boolean value and a string. Pass in the friendsAvailable variable and name to callFriend.

Create a function callFriend that accepts a boolean value and a string. If the boolean value is true, callFriend should return the string 'Plans made with NAME this weekend'. Otherwise it should return 'Everyone is busy this weekend'.
``` javascript
let friendsAvailable = true;

function makePlans(name) {
  //call the function callFriend and return the result
  return callFriend(friendsAvailable,name);
}

function callFriend(bool, name) {
  //if boolean value is true, return the string 'plans made with name this weekend'
  if (bool){
    return `Plans made with ${name} this weekend`;
  }else{ //otherwise return everyone is busy this weekend
    return 'Everyone is busy this weekend';
  }
}

// Uncomment these to check your work!
console.log(makePlans("Mary")) // should return: "Plans made with Mary this weekend'
friendsAvailable = false;
console.log(makePlans("James")) //should return: "Everyone is busy this weekend."
```


___
### `Challenge: Display vs. Execution`
Create a console log that displays the contents of the function rather than executing it. For example, your result should be function add20 (num){ return num + 20 }.
``` javascript
function add20 (num){
  return num + 20
}

// CREATE YOUR CONSOLE.LOG BELOW 
console.log(add20.toString());
console.log(Function.prototype.toString.call(add20));
```


___
### `Challenge: isOdd`
Create a console log that displays the contents of the function rather than executing it. For example, your result should be function add20 (num){ return num + 20 }.
``` javascript
function isOdd(num){
  if (num % 2 != 0){
    return true;
  } else {
    return false;
  }
}
console.log(isOdd(5)); // should log: true
console.log(isOdd(2008)); // should log: false
```


___
### `Challenge: Control Flow - if statements & remainders`
Write a function iLoveEvenNumbers that takes a number argument and returns 'Oh Yeah Evens!' if the argument is even or 'I am too normal for odd numbers' if the argument is odd.
``` javascript
function iLoveEvenNumbers(num){
  if (num % 2 === 0){
    return 'Oh Yeah Evens!';
  } else {
    return 'I am too normal for odd numbers';
  }
}

console.log(iLoveEvenNumbers(42)); // expected log 'Oh Yeah Evens!'
console.log(iLoveEvenNumbers(17)); // expected log 'I am too normal for odd numbers'
```



___
### `Challenge: getRemainder`
Create a function getRemainder that takes two numbers and returns the remainder (value left over from division) of dividing the larger number by the smaller one.

Hint- You have no guarantee which number will be the bigger number, how can you determine which is which?
``` javascript
function getRemainder(num1, num2) {
  // INSERT CODE HERE
  if (num1>num2){
    return num1 % num2;
  } else {
    return num2 % num1;
  }
}

// Uncomment the lines below to test your code
console.log(getRemainder(17, 5)); // => 2
console.log(getRemainder(20, 5)); // => 0
console.log(getRemainder(8, 22)); // => 6
console.log(getRemainder(7, 42)); // => 0
```


___
### `Challenge: Control Flow - if statements & multiple conditions`
Using an IF/ELSE statement, write a function greetings which returns 'Good Morning!' if the hour is before 12, 'Good Afternoon!' if the hour is before 15, or 'Good Night!' if the hour is 15 or after.
``` javascript
function greetings(hour) {
  if (hour<12){
    return 'Good Morning!';
  } else if (hour>=12 && hour<15){
    return 'Good Afternoon!';
  } else if(hour>=15){
    return 'Good Night!';
  }
}

console.log(greetings(8)); // expected log 'Good Morning!'
console.log(greetings(12)); // expected log 'Good Afternoon!'
console.log(greetings(14)); // expected log 'Good Afternoon!'
console.log(greetings(15)); // expected log 'Good Night!'
console.log(greetings(18)); // expected log 'Good Night!'
```

___
### `Challenge: gradeCalculator`
Create a function gradeCalculator which takes a grade (number) and returns its letter grade.

grades 90 and above should return "A"

grades 80 to 89 should return "B"

grades 70 to 79 should return "C"

grades 60 to 69 should return "D"

59 and below should return "F"
``` javascript
function gradeCalculator(grade) {
  if (grade>=90){
    return "A";
  }else if(grade<90 && grade>=80){
    return "B";
  }else if(grade<80 && grade>=70){
    return "C";
  }else if(grade<70 && grade>=60){
    return "D";
  }else{
    return "F";
  }
}

console.log(gradeCalculator(92)); // => "A"
console.log(gradeCalculator(84)); // => "B"
console.log(gradeCalculator(70)); // => "C"
console.log(gradeCalculator(61)); // => "D"
console.log(gradeCalculator(43)); // => "F"
```

___
### `Challenge: droids`
1. Complete the function droids that accepts an array of strings and iterates through the array using a FOR loop. Update the variable result to "Found Droids!" if the array contains the string "Droids". Otherwise update the variable result to "These are not the droids you're looking for." Return your updated result.
``` javascript
function droids(arr) {
  let result = '';
  for (let i=0; i<arr.length; i++){
    if(arr[i]==="Droids"){
      return result = "Found Droids!";
    }
  }
  result = "These are not the droids you're looking for.";
  return result;
}
const starWars = ["Luke", "Finn", "Droids", "Kylo", "Rey"] 
const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"] 
console.log(droids(starWars)) // should log: "Found Droids!"
console.log(droids(thrones)) // should log: "These are not the droids you're looking for."
```
2. Recreate the function droids from the previous challenge, but instead of using a FOR loop, use the built-in forEach method.
```javascript
function droids(arr) {
  let result = '';
  arr.forEach(element => {
    if(element === "Droids"){ 
       result= 'Found Droids!'
    }
  })
  if(!result){
    return "These are not the droids you're looking for."
  }else{
  return result;
  }
}

//Could also be written as 
function droids(arr) {
  let result = '';
  arr.forEach(function(anything)  {
    if(anything === "Droids"){ 
       result= 'Found Droids!'
    }
  })
  if(!result){
    return "These are not the droids you're looking for."
  }else{
  return result;
  }
}
```
- Could also be writen as 





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