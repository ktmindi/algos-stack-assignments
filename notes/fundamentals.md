# Intro
Moore's Law is an observation that the number of transistors on a microchip roughly doubles every two years, whereas its cost is halved over that same timeframe.
- Law claims that we can expect the speed and capacity of our computers to increase every two years yet we will pay less for them

Computers are machines built from components such as semiconductor chips. These machines can be taught to do things not imagined when they were orginally built.
- They know only what we tell them, from a computer's viewpoint you are training to become an educator. A machine educator.

We tell computers what to do by creating **software**
- Software is a sequence of instructions that we build and provide to a computer. Then they run the instructions mindlessly.
- To talk to ocmputers we need a "go-between" language: something that software engineers can understand, yet can also be translated into machine language instructions
    - Few go-between languages include: PHP, Python, Ruby, Javascript, Swift, C#, Java, Perl, Erlang, Go, Rust, and others - HTML and CSS 
    - Each language has its pros and cons and therefore are useful in different situations

All these sequences of instructions, written in programming languages like JavaScript, are what we call Source Code. How and when this source code is translated into machine code will depend on the language and the machine. 
- *Interpreted languages* like PHP, Python, and Ruby translate from source code into machine code “on the fly”, immediately before a computer needs it.
- *Compiled languages* do some or all of this translation ahead of time

Computers executes *(runs)* machine code that was built *(translated)* from some piece of source code: code that was written by a software engineer.



# Code Flow
>**LOOP** allows you to instruct to computer to execute the same section of the code multiple times


>**IF-ELSE STATEMENT** (or a conditional) allows you to have the computer jump to a different section of your code based on whether a certain condition is true or false

>**FUNCTION** used for code that you expect to use often, which we assign a name and can be called on directly



# Variables and Data Types 
These ideas are pretty universal but each language has their own way of displaying or executing these different things, for our purposes we will be using javascript as our language.
- Imagine if you had two objects (a book and a ball) that you wanted to carry around in your hands. With two hands, it is easy enough to carry two objects. However, what if you also had a sandwich? You don’t have enough hands, so you need one or more containers for each of the objects. 
- What if you had a box with a label on it, inside which you can put one of your objects. The box is closed, so all you see is the label, but it is easy enough to open the box and look inside. This is essentially what a variable does.
> A variable is a specific spot in memory with a label you provide

```JAVASCRIPT
let myName = 'Kieu';
console.log(myName);
```
> **Number** can store a huge range of numerical values from extremely large values to microscopically small ones, to incredibly negative values as well. If you know other programming languages, you might be accustomed to making a distinction between integers and floating-point numbers – JavaScript makes no such distinction.

> **String** is any sequence of characters, contained between quotation marks. In JavaScript, you can use either single-quotes or double-quotes. Either way, just make sure to close the string the same way you opened it. 'Word' and "wurd" are both fine, but 'weird" and "whoa!' are not.

> **Boolean** has only two possible values: true and false. You can think of a Boolean like a traditional light switch, or perhaps a yes/no question on a test. Just as a light switch can be either on or  off, and just as a yes/no question can be answered with either yes or no, likewise a Boolean must have a value of either true or false – there is nothing in-between.

# BEST PRACTICE FOR JAVASCRIPT
- Always end the line of code with a semicolon ";" including console.logs
- The semicolon is a way of signaling that the statement is compelete
- Keeping the code consistent is important when working in groups - making it easier to follow along

# Equal Signs 
### **X=Y**
- set the value of x equal to y
- used to `set things`
### **X==Y**
- is the value of x equal to the value of y
- used to `test things`
### **X===Y**
- used if you want strict comparison without converting data types
- Generally, === is advised, unless you explicitly intend to equate values of differing types, such as {1,true,"1"} or {0,false,"0"}, etc.

## **QUICK QUIZ**
>How many inputs are accepted by the == operator and the === operator, respectively?
>>`Both accept two values, one before the operator and one after the operator`

>Do inputs to == and === operators need to be the same data type, for the operators to function?
>>`Inputs do not need to be the same data type. However if they are not, === always returns false. The == internally converts values to the same type before comparing`

>What is the data type of the output value produced by the == and === operators?
>>`Both == and === return a boolean value of true or false`



# typeof Operator
- This operator is used to look up what the specific data type of a given operand is. 
- In JavaScript, the typeof operator returns the data type of its operand in the form of a string. 
- Operand can be any object, function or variable
```
typeof("testing")   // => "string"
typeof(22)         // => "number"
typeof(false)      // => "boolean"
```
- Keep in mind that the typeof an array is an object.
```
const favMovie = "Star Wars: Episod IV";
const timesSeen = 732;
const goingToWatchItAgain = true; 

// ADD CODE BELOW HERE
console.log(typeof(favMovie));
console.log(typeof(timesSeen));
console.log(typeof(goingToWatchItAgain));

let favMovieType = typeof(favMovie);
let timesSeenType = typeof(timesSeen);
let seeAgainType = typeof(goingToWatchItAgain);

console.log(favMovieType);
console.log(timesSeenType);
console.log(seeAgainType);
```


# Functions
When we declare or create a function it will look like this
```JAVASCRIPT  
function nameOfFunction(){
    console.log("Hello World);
}
```
- Parameters will go after the nameOfFunction 
- And what the function will do will go between the two {}

```JAVASCRIPT  
nameOfFunction();
```
- This is how we will call or run or execute the function



# Conditionals
## IF STATEMENTS
IF statements look at the value of a variable, or perhaps compare two variables, and then execute certain lines of code if the result is what you expect. 
- If you wish, you can also execute other lines of code if the result goes the other way.
- The important point is that each decision has only two possible outcomes.You have a certain test or comparison to be done; **IF** the test passes, **THEN** you execute certain code.
- If you wish, you can execute other code in the “test did not pass” (ELSE) case. 


``` JAVASCRIPT 
if (EXPRESSION) // EXPRESSION is evaluated upon reaching this line
{
    // body of 'IF': code runs only if EXPRESSION evaluates to true
}
else
{
    // body of 'ELSE': code runs only if EXPRESSION evaluates to false
}


```



# Chaining and Nesting
- When would you walk/ fly /swim?
```JAVASCRIPT
if(weather != "rainy")
{
    if(distanceToStadium < 3)
    {
        console.log("I think I'll walk to the game.");
    }
    else
    {
        console.log("It's a bit far, so maybe I'll fly.");
    }
}
else
{
    console.log("Hey, I'm a duck! A little water is OK. I'll swim.");
}
```
- If the weather is not rainy you will walk to the game if the distance to the stadium is less than 3
- if the weather is not rainy you will fly to the game if the distance to the stadium is more than 3
- If the weather is rainy then you will swim



# Loops
**FOR** loops are useful when you know how many times those lines of code will run. **WHILE** loops are slightly better when you don’t know how many times to loop, but you will loop while a certain test continues to be true.

To create a FOR LOOP you need to specify 3 things within the parentheses following the FOR: any initial setup, a test that must be true in order to start the loop, and any code to be run at end of each time through the loop.

```JAVASCRIPT

//     A ;         B ;         D
for (var num = 1; num < 6; num = num + 1)
{
    // C
    console.log("I'm counting! The number is ", num);
}
// E
console.log("We are done. Goodbye world!");

```
- The above will execute:
    - I'm counting! The number is 1
    - I'm counting! The number is 2
    - I'm counting! The number is 3
    - I'm counting! The number is 4
    - I'm counting! The number is 5
    - We are done. Goodbye world!

WHILE loops are similar to FOR loops, except with two pieces missing. 
- First, there is no upfront setup like is built into a FOR loop. 
- Also, unlike a FOR statement, a WHILE doesn’t automatically include code that is executed at the end of each loop (our D above). 
- WHILE loops are great when you don’t know how many times (iterations) you will loop. Any FOR loop can be written as a WHILE loop. 
```JAVASCRIPT
// A
var num = 1;
// B
while (num < 6)
{
    // C
    console.log("I'm counting! The number is " + num);
    // D
    num = num + 1;
}
// E
console.log("We are done. Goodbye world!");
```

## Other Loop Tips
- Some developers like to increment a variable’s value by running num += 1; this is the same as typing num = num + 1. 

- You may sometimes see num++ or even ++num; both are equivalent to +=.

- We can decrement the value of num by running simply num--; or --num. This is exactly the same as running num = num – 1; or num -= 1. 

- There are *= and /= operators as well, that multiply and divide a number as you might expect.

- With more complex loops, you might need to break out of a loop early or to skip the current pass but continue looping. In JavaScript, you can use special BREAK and CONTINUE keywords to do this. 
    - The break keyword immediately exits the specific loop you are currently in and continues immediately following the loop. 
    - Even the final end-loop statement (num = num + 1 above) will not be executed.
    - A continue skips the rest of the current pass through the loop, but any loop-end statement is executed and looping will continue. 
    - With both, once they run, any subsequent code within the loop is skipped.


# Parameters
- When you call a function you will pass in arguments
- When you declare or write a function you will declare what parameters the function will take
*javascript does not care where you place the curly brackets as long as they are present - braces are a way to indicate to the system some number of lines of code that it should treat as a single group*
*IF..ELSE and WHILE and FOR statements will only operate on a single line of code.*



# VAR - CONST - LET
- var can be reassigned and updated whereas let can only be updated. if you use var and you have thousands of lines of code and you re-use a variable name that already exists then javascript will not give you an error and will proceed to reassign the variable name to the value you provide it

console.log(favoriteColor)
var favoriteColor = green       this will not give us an error but undefined 

console.log(secondColor)        this will give us an error because javascript will say there is no variable named *cannot access before initialization* secondColor
let secondColor = red           

https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/




# Return Values
- A value that is returned to the caller when the function finishes executing
- Not all functions have return values, and looking at the source code you might think that not all functions have a return statement. However, they indeed do, because if there is nothing stated, an implicit return is added automatically at the end of the function.


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
