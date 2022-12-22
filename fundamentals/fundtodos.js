//FUNDAMENTALS TO DO 1

//Setting and Swapping
//Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.
var myNumber = 42;
var myName = 'kieu';

var temp = myNumber;
var myNumber = myName;
var myName = temp;

console.log(myNumber);
console.log(myName);


//Print -52 to 1066
//Print integers from -52 to 1066 using a FOR loop.
for (var num = -52; num < 1067; num = num + 1){
    console.log(num);
}
console.log('We have printed numbers from -52 to 1066');
 

//Don’t Worry, Be Happy
//Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
function beCheerful(){
    console.log("Good Morning");
}
for (var i = 1; i<99; i++){
    beCheerful(i);
}

//Multiples of Three – but Not All
//Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
for (var ii=-300; ii<=0; ii++){
    if(ii%-3==0 && ii!=-3 && ii!=-6){
        console.log(ii);
    }
}
 

//Printing Integers with While
//Print integers from 2000 to 5280, using a WHILE.
var num1 = 2000;
while (num1<=5280){
    console.log(num1);
    num1 = num1+1;
}

//You Say It’s Your Birthday
//If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 


function birthday(num3, num2){
    let month = 7;
    let day = 9;
    if(num3===month && num2===day){
        console.log("How did you know?");
    }else if(num3===day && num2===month){
        console.log("How did you know?");
    }else{
        console.log("Just another day");
    }
}
console.log(birthday(10,1));
console.log(birthday(7,9));
console.log(birthday(9,7));

//Leap Year
//Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.
function leapYear(year){
    if(year%400==0){
        return console.log(year, "is a leap year");
    } else if(year %100 === 0){
        return console.log(year, "is not a leap year");
    } else if(year %4 ===0) {
        return console.log(year, "is a leap year");
    } else {
        return console.log(year, "is not a leap year");
    }
}

leapYear(2020);
leapYear(2021);
leapYear(2000);
leapYear(1900);
//By adding in return to the function.. we dont need to console log when we call the function. by leaving it as is for the birthday function, you will notice that the terminal returns "Undefined" after each test


//Print and Count
//Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
let count = 0
for (let i = 512; i < 4096; i++) {
    if (i % 5 === 0) {
        console.log(i)
        count++
    }
}
console.log(count)
//the i variable only exists inside the loop so its okay to use it in other places in this js file without worrying about variable names
 

//Multiples of Six

//Print multiples of 6 up to 60,000, using a WHILE.
var sixx = 6;
    while (sixx <= 60000){
        if(sixx%6==0)
    console.log(sixx);
}
 
//Counting, the Dojo Way

//Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

 

//What Do You Know?
//Your function will be given an input parameter incoming. Please console.log this value.

 

//Whoa, That Sucker’s Huge…
//Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?

 

//Countdown by Fours
//Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

 

//Flexible Countdown
//Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

 

//The Final Countdown
//This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).