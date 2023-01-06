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



//cascading function
function cascade(number) {
  if(number > 9){
		let newNumber = Math.floor(number/10);
    console.log(number);
    cascade(newNumber);
  }
  console.log(number);
}

cascade(111);
cascade(12345);

function stringCascade(word){
  if(word.length >1){
    let newWord = word.slice(0,-1);
    console.log(word);
    stringCascade(newWord)
  }
  console.log(word)
}

//Test Case
stringCascade("racecar")


//Challenge 7
function findInOrderedSet(arr, target, left=0, right=arr.length-1) {
	if (left>right){
    return false
  }
  let middleIndex = Math.floor((left+right)/2)
  if (target === arr[middleIndex]){
    return true
  }
  else if(target<arr[middleIndex]){
    return findInOrderedSet(arr,target,left,middleIndex-1)
  }
  return findInOrderedSet(arr, target,middleIndex+1,right)
  //think of base case if array is empty return false
  
  //find middle index of array
  
  //check if target is strictly equal to the middle index
  
  //check if target is in the first half of array
  
  //check if target is in the right half of the array
  
}

const nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 4));  //-> true
console.log(findInOrderedSet(nums, 2));  //-> false


//Challenge 8 
function countWaysToReachNthStair(n) {
	if(n===1){
  	return 1
	}
  if(n===2){
    return 2
  }
  return countWaysToReachNthStair(n-1) + countWaysToReachNthStair(n-2)
}

console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))
