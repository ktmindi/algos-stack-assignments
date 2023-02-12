
# ***forEach***
- `forEach` is just an iterative function/method like a *for loop*, except it runs a ***function*** that you provide, on every single element in the array. 

```javascript
function forEach(array, callbackFn) {
   //Iterate over array
    for (let i = 0; i < array.length; i++) {
        //Run callback function on each element
        let element = array[i]
        callbackFn(element)
    }
}
```

### Arrow Function Syntax: 

```javascript
function add5(num){
      return num + 5;
}
//Same As: 
const add5 = num => {
      return num + 5;
}
//Same As:
const add5 = num => num + 5; 
```
- Note: Arrow functions written on ONE line, do not need the `return` keyword.


# ***map***
- `map` is jsut an iterative function/method that creates a **new array**.
- It fills the new array with the *results/outputs* of running a ***function*** that you provide, on every single element in the `input` array.
- The `map` function takes in two inputs:
   
1. `array`
2. `callbackFn`
```javascript
function map(array, callbackFn){
        //New array to hold results 
        const resultsArray = [];
        //Iterate over array, forEach is an iterative method
        forEach(array, (element) => {
                //For each element, run cbFn
                let result = callbackFn(element);
                //Push results to array
                resultsArray.push(result);
        })
        //Return array 
        return resultsArray;
}
```


- We want to iterate over the array, and run the callback function on each element. 
- Instead of using a `for-loop`, we use instead a `forEach` function.
  - The `forEach` function takes in two inputs:
      - a. `array`: Same array passed into `map` in this case
      - b. `function`:   (element) => **callBackFn**(element)
```javascript
(element) => {
        callBackFn(element)
}
//Same As: 
function(element){
        callBackFn(element)
}
```
> forEach test case:
```javascript
const testArray = ['a','b','c']
//printEl prints out the input passed-in
function printEl(element){
    console.log(element)
}
forEach(testArray,printEl) // => ['a','b','c']
```
>map test case:
```javascript
const testArray2 = [3,4,5]

function minusTwo(num){
      return num -2;
}
console.log(map(testArray2,minusTwo)) //=> [1,2,3]
```
>Walkthrough of map
```javascript
function map(array, callbackFn) {
    const resultsArray = [];
    forEach(array, (element) => {
        let result = callbackFn(element);
        resultsArray.push(result);
    })
    return resultsArray;
}
//Test Cases:
const testArray2 = [3,4,5]

function minusTwo(num){
      return num -2;
}
console.log(map(testArray2,minusTwo)) //=> [1,2,3]
```
1. We initalize `resultsArray` to an empty array. []
2. We iterate through our input array using the `forEach`
```javascript
forEach([3,4,5], (element) )
```
>This is saying we are invoking the `forEach` function. For each element in the array `[3,4,5]`, we'll run a function for each element. The parameter we'll call each element will be `(element)`. 
3. In our `(element)=>`  function body, we then run the `callBackFn` passed into `map` on each `element`. 
```javascript
forEach(array, (element) => {             // array == [3,4,5]
        let result = callbackFn(element); //callBackFn == minusTwo
        resultsArray.push(result);
    })
    return resultsArray;
```
4. We push the result of this into our resultsArray.
5. Return resultsArray.
