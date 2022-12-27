// write a function that accepts a positive integer n as an input and logs every number from n (inclusive) to 0 (exclusive) to the console.
function countdown(n) {
	//Base Case:
  if(n === 0){
    return 1;
  }
  console.log(n)
  return countdown(n-1)
  }
// countdown(10);
// countdown(10);


// Challenge 2
function sum(array) {
	//Base Case:
  if(array.length === 0){
    return 0
  }
  //Recursive Case:
  return array[0] + sum(array.slice(1))
}

// uncomment these to check your work
 console.log(sum([1,1,1])); // -> returns 3
 console.log(sum([1,2,3,4,5,6])); // -> returns 21


// Challenge 3
function palindrome(string) {
	//Remove punctuation and mkae string lowercase
  string = string.toLowerCase().replace(/[^a-z]/g,"")
  //Base Case: If string is 1 letter, then it IS a palindrome
  if(string.length ===1){
    return true;
  }
  //Base Case 2: If the first and letters are not the same, then it is NOT a palindrome
  if(string[0] !== string[string.length-1]){
    return false
  }
  return palindrome(string.slice(1,-1))
}

console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
console.log(palindrome("llama mall")); //-> true
console.log(palindrome("jmoney")); //-> false