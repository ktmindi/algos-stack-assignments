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