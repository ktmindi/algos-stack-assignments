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

___
### `Challenge: Short-Circuiting a Loop`
Complete the function holidays that accepts an array of strings and iterates through the array. If the array contains the string "October", return "Happy Halloween". Otherwise, return the string "Have a great day!". Do not use a variable to store the result that you are returning.
``` javascript
function holidays(arr) {
  // Do not use a variable to store your result 
  for (let i=0; i<arr.length;i++){
    if(arr[i]==="October"){
      return "Happy Halloween";
    }
  }
  return "Have a great day!";
}

const months = ["April", "May", "June", "October"];
const animals = ["Cats", "Dogs", "Pigs"];
console.log(holidays(months)); // should return: "Happy Halloween"
console.log(holidays(animals)); // should return: "Have a great day!"

//solution provided
//declare a function holidays that accepts an array of strings
function holidays(arr){
  //use a for loop to iterate thru the input array
  for (let i=0; i<arr.length; i++) {
    //use a conditional to check each element of the array for the string "October"
    //if the current element is "october" return "happy halloween"
    if (arr[i] === 'October') return 'Happy Holloween';
  }
  //if not return have a great day
  return 'Have a great day!';
}
```
___
### `Challenge: For Loops - Updating Array Elements`
Using a FOR loop, write a function addN which adds the argument n to each number in the array arr and returns the updated arr.
``` javascript
//inputs is an array and a number
//output is an array
function addN(arr, n){
  //iterate over the array 
  for (let x=0; x<arr.length; x++){
    //for every element inside the array add n to the element
    arr[x]+=n;
  }
  return arr;
  //return array
} 

console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
console.log(addN([3, 4, 5], 2)); // expected log [5, 6, 7]
```

___
### `Challenge: For Loops - Summing Array Elements`
Using a FOR loop, write a function getTheSum which adds each element in arr to find the array total.
``` javascript
//input = array
//output = array
function getTheSum(arr){
  //declare a variable for the total
  let total = 0;
  //iterate over the array using a for loop
  for (let i=0; i<arr.length; i++){
  //add each element to eachother
    total = arr[i]+total;
  }
  return total;
  //return the total
}

// Uncomment these to check your work!
console.log(getTheSum([3, 6, 9])); // expected log 18
console.log(getTheSum([10, 11, 12])); // expected log 33
```

___
### `Challenge: multiplyAll`
Create a function multiplyAll that takes an unknown number of integer arguments, multiplies them all together, and returns the result.
``` javascript
//input = unknown number of integer arguments
//output = integer
//declare a function
function multiplyAll(...arg){ //...arg is an array-like object 
  //declare a variable for the total and make the variable equal to the first integer [OR BECAUSE THIS IS MULTIPLYING YOU CAN SET IT TO 1 AND CHANGE LET I = 1 TO LET I = 0]
  let total = arg[0];
  //iterate over the arguments 
  for (let i=1; i<arg.length; i++){
    //multiply each argument to the total
    total = arg[i]*total;
  }
  //return the total
  return total;
}

console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
console.log(multiplyAll(5, 5, 5, 3)) // should log: 375
```
___
### `Challenge: Loops - Summing Two Arrays`
Write a function mergingElements which adds each element in array1 to the corresponding element of array2 and returns the new array.
``` javascript
//input two arrays
//output one array
function mergingElements(array1, array2){
  //iterate over array
  for (let i=0; i<array1.length;i++){
    //add every element from array1 to corresponding element array2
    array2[i] += array1[i];
  }
  return array2;
}

console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]
```

___
### `Challenge: Loops & Control Flow`
Write a function mergingTripletsAndQuints which takes in two arrays as arguments. This function will return a new array replacing the elements in array1 if they are divisible by 3 or 5. The number should be replaced with the sum of itself added to the element at the corresponding index in array2.
``` javascript
//input two arrays
//output one array
function mergingTripletsAndQuints(array1, array2) {
 // iterate over array1
  for (let i=0; i<array1.length;i++){
    //if the number is divisible by 3 or 5 
    if(array1[i]%3===0 || array1[i]%5===0){
      //replace it with the sum of itself and corresponding element in array2
      array1[i]+=array2[i];
    }
  }
  //return new array
  return array1;
}

// Uncomment these to check your work!
console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]
```
___
### `Challenge: While Loops - Counters`
Using a WHILE loop, write a function imAboutToExplodeWithExcitement which prints a countdown from n. When the countdown gets to 5, print 'Oh wow, I can't handle the anticipation!' When it's at 3, print 'I'm about to explode with excitement!' When the counter is finished, print 'That was kind of a let down'.
``` javascript
function imAboutToExplodeWithExcitement (n) {
  while(n >0){
    if(n !== 5 || n!==3){
      console.log(n)
      n--;
    }
    if(n ===5){
      console.log("Oh wow, I can't handle the anticipation!");
      n--;
    }
    if(n===3){
      console.log("I'm about to explode with excitement!")
     n--;
    }
    if(n===0){
    console.log("That was kind of a let down")
    }   
  }
}
imAboutToExplodeWithExcitement(10); // expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'


//another way to do it
function imAboutToExplodeWithExcitement(n){
  let count = 0;
  while (n>=1){
    console.log(n)
    n = n-1;
    if(n===5){
      console.log("Oh wow, I can't handle the anticipation!");
      n--;
    } else if(n===3){
      console.log("I'm about to explode with excitement!");
      n--;
    } else if(n===0){
      console.log("That was kind of a let down");
    } 
  }
}

imAboutToExplodeWithExcitement(10);



//the way i had it only prints starting from 9 and not 10 
function imAboutToExplodeWithExcitement(n){
  let count = 0;
  while (n>=1){
    n= n-1;
    if(n===5){
      console.log("Oh wow, I can't handle the anticipation!");
    } else if(n===3){
      console.log("I'm about to explode with excitement!");
    } else if(n===0){
      console.log("That was kind of a let down");
    } else{
      console.log(n)
    }
  }
}

```

___
### `Challenge: Control Flow - if statements and the Math object`
Using an IF/ELSE statement, write a function closestToTheMark that takes two player inputs as number arguments. The function will return 'Player 1 is closest' or 'Player 2 is closest' depending on which player input is closest to the randomly generated number.

Note: Due to the output being based off of a random factor, the tests provided below cannot determine if you have solved the prompt exactly. The test cases for this challenge check for the correct data types only.
``` javascript
function closestToTheMark(player1, player2){
  const theMark = Math.floor(Math.random() * 100)
  console.log(`If theMark is ${theMark}...`);
  let dist1 = Math.abs(theMark-player1);
  console.log(dist1);
  let dist2 = Math.abs(theMark-player2);
  console.log(dist2);
  if(dist1<dist2){
    return "Player 1 is closest";
  } else {
    return"Player 2 is closest";
  }
}

console.log(closestToTheMark(25, 75));
```

___
### `Challenge: Loops - Range`
Using a loop, write a function getTheRange which finds the range (difference between high and low) of arr. The value returned should be an array with the low, high, and range.
``` javascript
function getTheRange(arr){
  // ADD CODE HERE
  let result = [];
  let lowest = Infinity;
  let highest = -Infinity;
  for(let i=0;i<arr.length;i++){
    if(arr[i]<lowest){
      lowest = arr[i];
    }else if(arr[i]>highest){
      highest = arr[i];
    }
  }
  let range = highest-lowest;
  result.push(lowest, highest, range);
  return result;
}

console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]
```

___
### `Challenge: Loops - Multiple Conditions`
Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers in array2 to each element under 10 in array1. Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 to those elements over 10 in array1.

BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.
``` javascript
function addingAllTheWeirdStuff(array1, array2){
  let oddSum = 0;
  let evenSum = 0;
  let addOne = false;
  //find the sum of all odd and even numbers in array2
  for(let i=0; i<array2.length; i++){
    if (array2[i]%2 !==0){
      oddSum += array2[i];
    }else{
      evenSum += array2[i];
    }
    if(array2[i]>20){
      addOne = true;
      break;
    }
  }console.log(oddSum);
console.log(evenSum);
  //add the sum of all the odd numbers in array2 to each element under 10 in array1
  //add the sum of all the even numbers in array2 each element over 10 in array1
  for (let i=0; i<array1.length;i++){
    if (array1[i]<10){
      array1[i]+=oddSum;
    }else{
      array1[i]+=evenSum;
    }
  }
  //if any element in array2 is greater than 20 add 1 to every element in array1
  if (addOne) {
    for (let i=0; i<array1.length;i++){
      array1[i]+=1;
    }
  }
  return array1;
}

console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
```
___
### `Challenge: disemvowel`
Write a function disemvowel that takes in a string and returns a new string with all vowels removed.
``` javascript
function disemvowel(string) {
  let vowels = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true,
  };
  //create an array string that will act as our result value
  let result="";
  //loop through the inputted string
  //convert the letter to lowercase to catch uppercase inputs
  //check if the letter is inside of the object
  //if not, concatenate that letter ionto result
  for (let i=0; i < string.length; i++){
    let letter = string[i].toLowerCase();
    if (!vowels[letter]){
      result += string[i];
    }
  }

  //return reseult
  return result;
}

// Uncomment these to check your work!
console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'


// another way 
let word = "cOdesmith"
console.log(word.replace(/[aeiouAEIOU]/g, ""));
```
___
### `Challenge: addWaldo`
Create a function addWaldo that accepts an object with keys being first names and values being last names. For example addWaldo({'Luke': 'Skywalker', 'Harley': 'Quinn', 'Ryan': 'Reynolds'}) should add the key 'Waldo' with the value 'unknown' to the object and return the mutated object.
``` javascript
const addWaldo = (obj) => {
  obj.Waldo = 'unknown'
  return obj;
}

const siliconValley = {'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle'}
console.log(addWaldo(siliconValley)) // => { Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }

```
___
### `Challenge: findWaldo`
Create a function findWaldo that accepts an object and returns the value associated with the key 'Waldo'. If the key 'Waldo' is not found, the function should return 'Where's Waldo?'
``` javascript
const findWaldo = (obj) => {
  if(obj.Waldo){
    return obj.Waldo
  } 
  else{
    return "Where's Waldo?"
  }
}
const DC = {'Bruce': 'Wayne', 'Harley': 'Quinn'}
const supernatural = {'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown'}
console.log(findWaldo(DC)) // => 'Where's Waldo?'
console.log(findWaldo(supernatural)) // => 'unknown'

```
___
### `Challenge: arrayBuilder`
Write a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. The order of the elements in the array does not matter, but repeated elements should be grouped.
``` javascript
function disemvowel(string) {

```
___
### `Challenge: Functions - Function Expression`
Convert the function named functionDeclaration to an anonymous function expression and assign it to a variable called myFunc.
``` javascript
function disemvowel(string) {

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