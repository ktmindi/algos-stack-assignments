// Challenge 1 (REGULAR) - Create a function reverseString that accepts a string as a parameter and returns the reverse of that string. reverseString("I love testing") // should return "gnitset evol I"

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--){
        newString += str[i]
    } return newString
}
console.log(reverseString("codesmith prep"))

// Challenge 1 (ADVANCED) Write a function that console logs a staircase of any given height where 1 <= N <= 100. The staircase must climb up from left to right. The last line should only consist of asterisks, without any leading/trailing spaces. 

const drawStairs = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log("".repeat(n-i),"*".repeat(i))
    }
}
drawStairs(5)


/* QUESTION 6 
Declare a function 'NumberedList', which returns a new instance of a 'NumberedList' object.
NumberedList objects should function similarly to arrays - i.e. they store values at number indexes, starting at 0. Any arguments passed into the 'NumberedList' constructor should be sequentially added to the NumberedList when it is instantiated.
NumberedList objects should also contain a length property, which keeps track of the number of elements in the oink.
*/

/* 
QUESTION 6 (PART 2)
Declare a function, 'add', which is accessible to ALL instances of 'NumberedList'. 'add' should take in a single argument, and when invoked on a List instance, should add the argument to the end of that particular List  increment the List's length property, and return the new length.
*/


// QUESTION 6 (PART 3)
// declare a function ‘contains’ that is accessible to ALL instances of ‘NumberedList'. ‘Contains’ should take in a single argument and return a boolean indicating whether the passed-in value is present in the particular NumberedList it was called upon.
function NumberedList(...args){
    this.oink = args;
    //Length property 
    this.length = args.length; 
}
  
NumberedList.prototype.add = function(val){
    //Add val to end of oink
    this.oink.push(val);
    //Increment the oink's length property 
    this.length++;
    //Return new length; 
    return this.length;
}
  
NumberedList.prototype.contains = function(val){
    return this.oink.includes(val);
}
  //Test Cases:
  
const myList = new NumberedList(1,2,3);
  
console.log(myList.add(4));
  
console.log(myList);
  
console.log(myList.contains(2)) // => false 


// Declare a function 'OrderedList', which takes in no arguments and returns an instance of an 'OrderedList' object when invoked with the 'new' keyword. OrderedList objects should function similarly to arrays - i.e. they will store values at numbered indexes, starting at 0. However, all elements are in sorted order.

// All OrderedList objects should contain their own 'length' property, which keeps track of the number of items they contain. When an OrderedList is first created, it should have a length of 0.

// - Task 1: Declare a function, 'add', which is accessible to ALL instances of 'OrderedList'. 'add' should take in a number as a single argument, and when invoked on an OrderedList instance, should add the number to that OrderedList in descending order, update the OrderedList's length property appropriately, and return the length of the OrderedList.

// - Task 2: Declare a function, 'reverse', which is accessible to ALL instances of 'OrderedList'. 'reverse' should take in no arguments, and when invoked on an OrderedList instance, should reverse the order of all elements in that OrderedList (except the 'length' property).

// - Task 3: Declare a function, 'getMax', which is accessible to ALL instances of 'OrderedList'. 'getMax' should take in no arguments, and when invoked on an OrderedList instance, should return the maximum number in the instance.


function OrderedList(){
    this.length = 0;
    this.list = [];
}
  
  //add() 
OrderedList.prototype.add = function(num){
    //Add the number to Ordered List (descending order)
    this.list.push(num);
    this.list = this.list.sort((a,b) => b-a)
    //Update length property 
    this.length++;
    //Return the length of the ordered list 
    return this.length;
}
  //reverse() 
OrderedList.prototype.reverse = function(){
    return this.list.reverse();
}
  //getMax()
OrderedList.prototype.getMax = function(){
    return Math.max(...this.list);
}
  
  //Test Case:
// const myList = new OrderedList();
  
// console.log(myList.add(1))
// console.log(myList.add(3))
// console.log(myList.add(2))
// console.log(myList)
  
// console.log(myList.reverse()) // =< [1,2,3]
  
// console.log(myList.getMax()) // => 3


////////////////////////////
//     Challenge 1
////////////////////////////

// ADD CODE HERE

// Uncomment the line below to test your code
// printDriverHeight();
// should print the driver's height


////////////////////////////
//     Challenge 2
////////////////////////////

// ADD CODE HERE

// Uncomment the line below to test your code
// printNavigatorName();
// should print the navigator's name


////////////////////////////
//     Challenge 3
////////////////////////////

// ADD CODE HERE

// When you run your code, it should print the driver's name followed by the navigator's name


////////////////////////////
//     Challenge 4
////////////////////////////

// ADD CODE HERE

// Uncomment the line below to test your code
// printGroupName('Sonny', 'Cher')
// should print 'Sonny and Cher'


////////////////////////////
//     Challenge 5
////////////////////////////

// ADD CODE HERE

// Uncomment the line below to test your code
// console.log('Challenge 5:', multiplyHeight(66, 72) === 4752)
// should print 'Challenge 5: true'


////////////////////////////
//     Challenge 6
////////////////////////////

// ADD CODE HERE

// Uncomment the line below to test your code
// console.log('Challenge 6:', square(3) === 9 && square(-4) === 16)
// should print 'Challenge 6: true'


////////////////////////////
//     Challenge 7
////////////////////////////

// ADD CODE HERE

// Uncomment the line below to test your code
// console.log('Challenge 7:', getArea(5) === 78.5)
// should print 'Challenge 7: true'


////////////////////////////
//     Challenge 8
////////////////////////////

// ADD CODE HERE

// When you run it, it should print the following:
// Hey followed by the navigator's name
// Hello followed by the driver's name


////////////////////////////
//     Challenge 9
////////////////////////////

// ADD CODE HERE

// Uncomment the lines below to test your code
// isCodesmithOpen(10);
// isCodesmithOpen(9);
// should print 'Codesmith is open.'
// followed by 'Sorry, Codesmith is closed.'


////////////////////////////
//     Challenge 10
////////////////////////////

// ADD CODE HERE

// Uncomment the lines below to test your code
// smallMediumOrLarge(5);
// smallMediumOrLarge(4);
// smallMediumOrLarge(3);
// smallMediumOrLarge(2);
// smallMediumOrLarge(1);
// should print 'Large please!'
// followed by 'Medium please!' twice
// followed by 'Small please!' twice


////////////////////////////
//     Challenge 11
////////////////////////////

// ADD CODE HERE

// Uncomment the lines below to test your code
// isAGoodBoy(true, true);
// isAGoodBoy(true, false);
// isAGoodBoy(false, true);
// isAGoodBoy(false, false);
// Should print pet, train, train, train


////////////////////////////
//     Challenge 12
////////////////////////////

// ADD CODE HERE

// Uncomment the lines below to test your code
// shouldEatBanana('yellow', true);
// shouldEatBanana('yellow', false);
// shouldEatBanana('green', true);
// shouldEatBanana('green', false);
// shouldEatBanana('red', true);
// Should print 'eat', "don't eat", 'wait', 'wait', "don't eat"


////////////////////////////
//     Challenge 13
////////////////////////////

// ADD CODE HERE

// Uncomment the line below to test your code
// countTo5();
// should print '1, 2, 3, 4, 5'


////////////////////////////
//     Challenge 14
////////////////////////////

// ADD CODE HERE

// Uncomment the line below to test your code
// countMost();
// should print '1, 2, 4, 5'