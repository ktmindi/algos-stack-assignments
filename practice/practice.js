// const increaseByTwo = [1, 2, 3, 4, 5];
// // ADD CODE HERE

// for (let i = 0; i<increaseByTwo.length; i++){
//   increaseByTwo[i] += 2;
// }

// // Uncomment the line below to check your work!
// console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = Object.keys(fruits);
// console.log(keys);

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x] + ",";
// }
// console.log(txt);

// function makeItBig(array){
//     for(let i=0; i<array.length; i++){
//         if(array[i]>0){
//             array[i] = "big";
//         }
//     } return array;
// }
// console.log(makeItBig([-1,3,5,-5]));

// function printOneReturnAnother(array){
//     console.log(array[array.length-2]);
//     //iterate through the array 
//     for (let i =0; i<array.length;i++){
//         if (array[i]%2 != 0){
//             return array[i];
//         }else{
//             i++;
//         }
//     }
//     //print second to last value in array
//     //return the first odd number in the array
//   }
  //test case
//   printOneReturnAnother([1,6,3,2,5,0,2,19]) //print 2 - return 1
  


//   function isOdd(num){
//     if (num % 2 != 0){
//       return true;
//     } else {
//       return false;
//     }
//   }
//   console.log(isOdd(5)); // should log: true
//   console.log(isOdd(2008)); // should log: false


// function doubleVision(array){
//     let newArray = [];
//     for (let i=0; i<array.length; i++){
//       newArray.push(array[i]*2);
//     }
//     console.log(array);
//     return newArray;
//   }
  
//   //test case
// console.log(doubleVision([1,2,3])) //should return [2.4.6]

function countPositives(arr){
    let count = 0;
    for (let i = 0; i<arr.length; i++){
      if (arr[i]>0){
        count +=1;
      } else {
        count = count;
      }
    arr[arr.length] = count;
    }
    return arr;
  }
countPositives([-1,1,1,1]) 