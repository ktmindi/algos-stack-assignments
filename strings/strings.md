
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






