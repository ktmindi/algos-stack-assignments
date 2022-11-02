// PUSH FRONT Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though! use for loop to shift everything to the right

function pushFront(a, b) {
    return [ b, a ]
}
console.log(pushFront([ 5, 7, 2, 3 ], 8))


// POP FRONT Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!


function popFront(arr) {
    temp = arr[ 0 ]
    arr[ 0 ] = arr[ 4 ]
    for (i = 0; i < arr.length; i++) {
        arr[ i ] = arr[ i + 1 ]
    }
    arr.pop()
    console.log(arr)
    return (temp)
}

console.log(popFront([0,5,10,15]))

// INSERT AT Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

function insertAt(array, index, value) {
    array.push(array[ index ])
    array[ index ] = value;
    return (console.log(array))
}

insertAt([ 100, 200, 5 ], 2, 311)

// REMOVE AT Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).


// SWAP PAIRS Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.
//function five() {
//    let temp = arr[0];
//    arr[0] = arr[arr.length-1];
//    arr[arr.length-1] = temp;

//}
//console.log(five([1,2,3,4]))
// REMOVE DUPLICATES Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. If you already made the Remove At function, you are welcome to use that! If you solved this using nested loops, for an extra challenge, try to do it without any nested loops!
