// function NBAPlayer(name, team, pos) { //class NBAPlayer
//     this.name = name; // @name = name
//     this.team = team; // @team = team
//     this.position = position; //@position = position
// }

// let curry = newNBAPLAYER(name, team, pos);

// NBAPlayer.prototype.dunk = function(){}; // class method def;end
// curry.dunk(); //js checks currry for method prototype 
// //^ method style invocation
// curry.__proto__ === NBAPlayer.prototype //js checks __proto__

/* 
node = pry

function NBAPlayer(name, team, position) {
    this.name = name;
    this.team = team;
    this.position = position;
}

let curry = new NBAPlayer("Steph Curry", "GS Warriors", "Point Gaurd")

NBAPlayer.prototype.dunk = function() {
    console.log(`${this.name} dunks!');
}

curry.name = "Steph";
curry
    NBAPlayer{
        this.name = "Steph";
        ...
    }
*/ 
let boosqua = "woof"
function soundMaker(sound, times) {
    //scope
        // any args passed to func
        // vars created inside function
        // any variables already declared before function was declared
    // closure
    function makeSound() {
        console.log(`${sound}`); // <-- inherits var sound
    }
    let i = 0;

    while(i < times) {
        makeSound();
        i++
    }
}

soundMaker(boosqua, 5);

function summation(arr) {
    let sum = 1;

    function summer() {
        for(let i = 0; i < arr.length; i++) {
            sum *= arr[i];
        }
    }
    
    summer();

    return sum;
}

let callback = function() {
    console.log("It has been 5 seconds!");
}
let timeToWait = 5000;


global.setTimeout(callback, timeToWait);
global.setTimeout(function () {
    console.log("It has been 5 seconds!");
}, 5000);
// ^^ this is ES5

global.setTimeout(() => {
    console.log("It has been 5 seconds");
}, 5000);
    

// ^^ preferred syntax pretty snazzy