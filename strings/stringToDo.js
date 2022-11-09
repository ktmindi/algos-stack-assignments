// Remove Blank. Given a string return all of that string's contents without blanks 

function removeBlanks(string) {
    temp = string.split(" ")
    return console.log((temp.join("")))
}

// removeBlanks("Pl ayTha tF u nkyM usi c ");

removeBlanks("Pl ayTha tF u nkyM usi c ");
removeBlanks("I can not BELIEVE it's not BUTTER");


//Get Digits. Given a string, returns the integer made from string's digits. (Allowed to use is NaN() and Number()).


function getDigits(string) {
    let tempStr = "";
    for (value in string) {
        if (!isNaN(string[ value ])) {
            console.log(string[ value ])
        }
    }
}
console.log(getDigits("abc8c0d1ngd0j0!8"));

//Acronym. Given a string (string of words), return the first letter of each word CAPITALIZED. 
// Recall a string is just an array of strings  

function acronym(str) {
    let wordsArray = str.split(' ')
    //empty string to store Acronyms/Firs tletter
    let acronymString = ''

    for (let word in wordsArray) {
        if (wordsArray[ word ].length > 0) {
            acronymString += wordsArray[ word ][ 0 ].toUpperCase()
        }
    }
    return acronymString
}

console.log(acronym("There's no free lunch - gotta pay yer way."));


//Count non-spaces.  
function countNonSpaces(str) {
    //intialize a counter 
    let count = 0;
    // if it's not a an empty blank as in  a character, increment count
    for (let character in str) {
        if (str[ character ] != ' ') {
            count++
        }
    }
    return count
}

console.log(countNonSpaces("Hello world !"));

//Remove shorter strings given array of str and a numerical val. return array that contains strings longer than given val. 
function removeShorterStrings(array, len) {
    let newStrings = [];

    let nextIndex = 0;
    for (let value in array) {
        if (array[ value ].length >= len) {
            newStrings[ nextIndex++ ] = array[ value ]
        }
    }
    return newStrings
}

console.log(removeShorterStrings([ 'There', 'is', 'a', 'bug', 'in', 'the', 'system' ], 3));