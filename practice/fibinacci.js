function firstFib(){
    if (num === 1) return 1;
    if (num === 2) return 1;
    return firstFib(num-1) + firstFib(num-2)
}
console.log(firstFib(4))
//this way..does not store any information and when we run it for firstFib(100) it will take a long time to run because everytime it runs over and over starting from the beginning


//what we want to do is store information so we dont have to start from the beginning every time

function createFib() {
    const memo = {};
    return function fib(num){
        //Base Case: If n is 1 or 2 return 1;
        if (num ===1) return 1;
        if (num ===2) return 1;
        // Next check if num is in memo, return the corresponding value
        if (memo[num]) return memo[num];
        //If it's not run the recursive call to find the fib)num)
        //Save in memo object
        memo [num] = fib(num-1) + fib(num-2)
        cocnsole.log("Memo:", memo[num])
        return memo[num];
    }
}

const getFib = createFib();
console.log(getFib(5)) //5
console.log(getFib(10)) //55
console.log(getFib(20)) //6765
console.log(getFib(55)) //24157817

//cuts the processing time down significantly from before where after 42 seconds firstFib(100) was still running -- here it runs in .122 seconds -- actually .062 seconds <-- if you just run get fib(100)
