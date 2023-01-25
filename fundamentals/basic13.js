//The foundation "Basic 13" Challenges from Algo Book

//Print all integers from 1 to 255
// for (let num = 1; num<=255; num++){
//     console.log(num);
// }


//Print integers from 0 to 255 and with each integer print the sum so far
// let count = 0;
// for (let num =0; num<=255; num++){
//     console.log(num);
//     count += num;
//     console.log(count);
// }



//Find and Print Max - given an array find and print its largest element
//traverse the array while updating the max value (shorter time complexity) - we can also do this by sorting the array in ascending order and the last element will be at the last index 
// let array = [1,2,3,4,6,30];
// let max = array[0];
// for (let i=1; i<array.length; i++){
//     if(max<array[i]){
//         max = array[i];
//     }
// }
// console.log(max);

//Array with Odds - create an array with all the odd integers between 1 to 255 inclusively
// for (let i=1; i<=255; i++){
//     if (i%2 != 0){
//         console.log(i);
//     }
// }


//Greater Than Y - given an array and a value y - count and print the number of array values greater than y
// let arr = [4,20,1,28,12,35,15,0];
// let y = 7;
// let result = 0;
function greaterThanY(arr,num){
    let result = 0;
    for (let i=0; i<arr.length; i++){
        if(arr(i)>num){
            result+=1;
        }
        return result;
    }
}
console.log(greaterThanY([4,20,1,28,12,35,15,0],7));
// for (let i=0; i>arr.length;i++){
//     while (arr[i]>y){
//         result+=1;
//         console.log(result);
//     }
//     console.log(result);
// }
// console.log(result);
//Max Min Average - given an array print the max, min, and average values for that array

//Swap string for array negative values - replace any negative array values with 'Dojo'
// let negArr = [-20,10,291,-1,92,-39,10,-100]
// for (let i=0; i<negArr.length; i++){
//     if (i<0){
//         negArr[i] = "Dojo"; 
//     } else {
//         console.log((negArr(i)));
//     }
// }

//Print odds - print all odd integers from 1-255 
// for (let i=1; i<=255;i++){
//     if (i%2 !=0){
//         console.log(i);
//     }
// }

//iterate and print array - iterate through a given arrray, printing each value
// let array = [10,20,12,312,122]
// for (let i=0; i<array.length; i++){
//     console.log(array[i]);
// }

//get and print average - analyze an arrays values and printt he average

//Square the values - swuare each value in a given array, returning that same array with changed values

//Zero out Negative Numbers - return the give array after setting any negative values to zero

//Shift array values - given an array move all values forward by one index, dropping the first and leaving a 0 value at the end