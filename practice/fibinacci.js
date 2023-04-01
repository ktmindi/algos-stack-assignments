function firstFib(){
    if (num === 1) return 1;
    if (num === 2) return 1;
    return firstFib(num-1) + firstFib(num-2)
}
console.log(firstFib(4))