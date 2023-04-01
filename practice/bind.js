// speak = function (sound) {
//     console.log(this.name, "is", sound)
// }

// let dog = {
//     name: "dog",
// }

// let parrot = {
//     name: "parrot",
// }

// bark = speak.bind(dog,"barking") //here we are calling the function
// chirp = speak.bind(parrot,"chirping")

// bark(); //here we are envoking the function
// chirp();

// //dog is barking
// //parrot is chirping

// //bind creates a new function, calls the function but does not envoke it





//              func = method, context = object
function functionBind(func, context) {
    context [ func ] = func;
    //console.log("Context Func: ", context[func])
    //console.log("context: ", context)
    return function () {
        return context [func]()
    }
}

const mattObj = {
    name: 'matt',
    shout: function () {
        console.log(this.name);
    }
};

let boundShout = functionBind(mattObj.shout, mattObj); 
boundShout(); //-> prints 'matt';


const kimObj = {
    name: 'kim',
    shout: function() {
        console.log(this.name);
    }
};
boundShout = functionBind(mattObj.shout, kimObj); 
boundShout(); // -> prints 'kim'

boundShout = functionBind(mattObj.shout, {name:'bob'}); 
boundShout(); //-> prints 'bob'