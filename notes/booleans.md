### Booleans
- Are useful for determining whether or not blocks of code should be executed
- They are also the default result for many evaluations
- Extremely useful when dealing with conditional statements
```JAVASCRIPT
let likesJavaScript = true;
let likesMath = false;

const numToCheck = 10;
console.log(numToCheck === 10) // => true
```
- Another example of booleans
```JAVASCRIPT
let iHaveChanged = false;

// ADD CODE BELOW
iHaveChanged = true;
console.log(iHaveChanged);

let iLoveCoding = true;
console.log(iLoveCoding);

let codingIsTooHard = false;
console.log(codingIsTooHard);
```

### Comparison Operators
- Are used when we need to compare different values
    < - Less than
    > - Greater than
    <= - Less than or equal to
    >= - Greater than or equal to
    == - Is loosely equal to
    === - Is strictly equal to
    != - Is not loosely equal to
    !== - Is not strictly equal to

- We already know that a single equals sign (=) is used to assign value to a variable, so we can't use that to compare two values
- So let's start with loose equality (==). This operator is used to compare if 2 values have the same value, even if they aren't necessarily the same type.
```JAVASCRIPT
 1   ==  1        // true
"1"  ==  1        // true
 1   == '1'       // true

true == true      // true
false == false    // true
```
- All of these comparisons are true, because the value is the same even though they may have a different data type.

- For 2 values to be strictly equal (===) to each other, they need to not only have the same value, but also must have the same data type:
```JAVASCRIPT
 2   ===  2        // true
"2"  ===  2        // false
 2   === '2'       // false

true === true      // true
false === false    // true
```

### Challenge
```JAVASCRIPT
// 1.
const small = 2;
const large = 5342;
// ADD CODE BELOW (isSmaller)
let isSmaller = small < large
console.log(isSmaller)

// console.log('Is 2 < 5342?');
// console.log(isSmaller);



// 2.
const num = 45;
const string = "45";
// ADD CODE BELOW (isLooselyEqual and isStrictlyEqual)
let isLooselyEqual = num == string;
let isStrictlyEqual = num === string;
console.log(isLooselyEqual)
console.log(isStrictlyEqual)

// console.log('Is 45 loosely equal to "45"?'); 
// console.log(isLooselyEqual);
// console.log('Is 45 strictly equal to "45"?');
// console.log(isStrictlyEqual);



// 3.
const isTrue = true;
const isFalse = false;
// ADD CODE BELOW (isTrueNotFalse)
let isTrueNotFalse = isTrue !== isFalse;
console.log(isTrueNotFalse)

// console.log('Is true not equal to false?');
// console.log(isTrueNotFalse);
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