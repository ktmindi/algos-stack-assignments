# Number Fundamentals

### Add / Subtract
```JAVASCRIPT
let birthYear = 1993;
let age = 29;
let in10Yrs = age + 10;

// Uncomment these to check your work!
console.log(birthYear);
console.log(age);
console.log(in10Yrs);
//answer 1993, 29, 39
```

### Multiply / Divide
```JAVASCRIPT

let twentyTimesFour = 20 * 4; 
let nineOverThree = 9/3;
let twoHundredTimesThree = 200 * 3;


// Uncomment these to check your work!
console.log(twentyTimesFour);
console.log(nineOverThree);
console.log(twoHundredTimesThree);
//answer 80,3,600
```

### Exponents and Remainders
- The exponentiation operator (**) raises the first number to the power of the second number.
    2**2 = 4
    2**4 = 16
- The modulus (remainder) operator (%) returns the remainder of dividing the first number by the second number.
    4 % 2 = 0
    4 % 3 = 1
    4 % 5 = 4 ** 5 is larger than 4 so technically it cant go into 4 at all so the remainder would be 4 **
- A common use of this is determining whether a number is even or odd since we know that even numbers are divisible by 2 then we can say that if the remainder of dividing any number by 2 = 0 then its an even number
    45 % 2 = 1 (45 is odd)
    36 % 2 = 0 (36 is even)




### Incrementor and Decrementor
- By using incrementor(++) we can increase the value of a number by 1 
- By using decrementor(--) we can decrease the value of a number by 1
```JAVASCRIPT
let num1 = 32;
let num2 = 44;

num1++
num2--

console.log(num1) //33
console.log(num2) //43
```


### assignment operators
- Each arithmetic operator has its own assignment operator:
    += - addition
    -= - subtraction
    *= - multiplication
    /= - division
```JAVASCRIPT
let num1 = 32;
let num2 = 25;
let num3 = 92;
let num4 = 64;

// ADD CODE BELOW HERE

//long hand - num1 = num1 + 17;
num1 += 17;
console.log(num1)

//long hand num2 = num2 - 14;
num2 -= 14;
console.log(num2)

//long hand num3 = num3 * 11;
num3 *= 11;
console.log(num3)

//long hand num4 = num4 / 8;
num4 /= 8;
console.log(num4)
```


### Type Coercion
- We can't add a string value and a number value together; instead, JavaScript "coerces" (changes) the number into a string and treats the + operator as an instruction to concatenate strings.
```JAVASCRIPT
console.log("10" + "5"); // 105
console.log("10" + 5); // 105
console.log(10 + 5); // 15
```
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
/**
 * Set - Frequency Counter
 * Time O(NlogN) | Space O(N)
 * https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const topKFrequent = (nums,k) => {
  const cache = {};
  // Iterate array putting elements into a hash 
  for(let i =0;i<nums.length;i++){
    if(!cache[nums[i]]){
      cache[nums[i]] = 1;
    }else{
      cache[nums[i]] +=1; 
    }
  }
  // Map over the object keys, with new array sub arrays 
  const map = Object.keys(cache).map((key)=> [Number(key), cache[key]])
  // Sort the sub arrays 
  const sortedMap = map.sort( (a,b) => b[1]-a[1])
  // Create a output array 
  let output = [];
  // Iterate until k , pushing into output array
  for(let i = 0;i<k;i++){
    output.push(sortedMap[i][0])
  }
  // Return the output array 
  return output;
}


console.log(topKFrequent([ 100, 100, 100, 200, 200, 300 ], 2)) // => [100,200]
console.log(topKFrequent([ 1 ], 1))// =>[ 1 ]

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