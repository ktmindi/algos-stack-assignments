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