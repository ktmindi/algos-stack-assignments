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

function makeItBig(array){
    for(let i=0; i<array.length; i++){
        if(array[i]>0){
            array[i] = "big";
        }
    } return array;
}
console.log(makeItBig([-1,3,5,-5]));