// const { randomFillSync } = require("crypto");
class Pirate {
    constructor(name, numTats) {
        console.log(this);
        this.name = name;
        this.numTats = numTats
    }

// const { callbackify } = require("util");
// var boosqua {
//    name = "Omar",
//    symbol = "🐓",
// };

// console.log(boosqua);
    yell () {
        console.log(`Yarrr my name is ${this.name}`);
    }

    static revolt(instance) {
        console.dir(this);
        console.dir(instance);
        console.log(`you need at least ${instance.numTats} more tats`)
    }
}

const jen = new Pirate ('Jen', 12);
const ryan = new Pirate('Ryan', 9)
Pirate.revolt(ryan)
jen.yell()
console.log(ryan)

// classToBindTo.functionBeingBound.call(objectInhertingBinding,arg1, arg2)
// classToBindTo.functionBeingBound.call(objectInhertingBinding,[arg1, arg2])

// const jenYell = ryan.yell.bind(jen);
// 1. ryan pojo
// 2. ryan.yell give us uninvoked function
// 3. call .bind on the function and give new context
// 4. give us new function with jen as the context
