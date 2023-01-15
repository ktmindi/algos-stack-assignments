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

const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
  console.log("x", x);
  console.log("person[x]", person[x]);
}
console.log(txt);