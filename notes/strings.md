
# Declaring a string in JS
- We can use '' , "" , and `` to declare a string in javascript 
- When we want to include a special character inside our string we will get syntax errors unless written properly
    - \' => single quote
    - \" => double quote
    - \\ => backslash
    - \n => newline
    - \r => carriage return
    - \t => tab
    - \b => backspace
    - \f => form feed

- Example if we want to output 'C:\Users\Win\Files\javascript.js' we have to write it like so
    - const path = "C:\\\Users\\Win\\Files\\javascript.js";

- Example if we want to output
' He said, "Hey Fool!" ' 
    - const heSaid = "He said, \"Hey Foo!\"";

- Example if we want to output
' My name ain't fool! '
    - const sheSaid = 'My name ain\'t Foo!';



### Concatenation
- We can use the + operator to concatenate strings
- Example if we want to output 'Welcome to the jungle!'
    const first = "Welcome";
    const second = "to the";
    const third = "jungle";

    const welcomeStatement = first + second + third 
    will give us 'Welcometo theJungle!' with the spacing incorrect

    we have to write like so..
    const welcomeStatement = first+" "+second+" "+third;


### Template Literal 
- console.log(`10 + 25 = ${10 + 25}`) // => "10 + 25 = 35"
- By writing 10+25 inside ${} we can execute that code inside the string 
- In order to do this we HAVE TO use BACKTICKS or it will not work


### String Properties and Methods
- To find the length of a string we can add .length to any string
    - myString.length
- Two common string methods are toUpperCase and toLowerCase to use these methods we have to include () at the end of the method name
    - favArtist.toUpperCase()
- Example
```JAVASCRIPT
let hometown = "New York City";
let favAlbum = "The Rise and Fall of Ziggy Stardust and the Spiders From Mars"

// ADD CODE BELOW
let count = hometown.length;
let upper = favAlbum.toUpperCase()
let lower = favAlbum.toLowerCase()

// Uncomment the line below to check your work!
console.log(count);
console.log(upper);
console.log(lower);
```

### Bracket Notation for Strings
- to access a specific character in a string we can add brackets [] to the end of our string and place the index of the character inbetween the brackets
```JAVASCRIPT
const songTitle = "Space Oddity"
const lyrics = "This is Ground Control to Major Tom / You’ve really made the grade"

// ADD CODE BELOW

let firstLetter = songTitle[0];
let seventhLetter = songTitle[6];
let lastLetter = lyrics[lyrics.length-1];

// Uncomment the line below to check your work!
console.log(firstLetter);
console.log(seventhLetter);
console.log(lastLetter);
```
- Remember that we start our Index with 0 


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






