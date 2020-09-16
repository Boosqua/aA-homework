console.log('Closures and Scope');
/* scope of a function includes:
    the function's aruguments
    any local variables declared inside the function
    any variables that were already declared when the function was defined

*/
console.log();
console.log("example: function which declares a function, can pass args to the function");
console.log();
function sayHelloNTimes(name, n) {
    function greet() {
        console.log(`Hi, ${name}!`);
    }

    for (let i = 0; i < n; i++) {
        greet();
    }
}

sayHelloNTimes("Bob", 3); // logs 'Hi, Bob!' x3
sayHelloNTimes("Sally", 6); // logs 'Hi, Sally!' x6

console.log('\n', 'Closures', '\n');

/* 
    function capture variables when defined inside another function.

    These funcs are called closures

    closures can modify captured variables
*/

console.log('Example: Closure modifying a free variable \n')


function sum(nums) {
    let count = 0;

    function addNum(num) {
        count += num;
    }

    for (let i = 0; i < nums.length; i++) {
        addNum(nums[i]);
    }

    return count;
}

console.log(sum([1, 3, 5]) + '\n');// => 9

function isPalindrome(string) {
    function reverse() {
        return string.split('').reverse().join('');
    }

    return string === reverse();
}

console.log('Using closures to make private states \n')

function createCounter() {
    let count = 0;
    return () => ++count;
}

let counter = createCounter();
console.log(counter()); // => 1
console.log(counter()); // => 2
counter.count; // undefined 
let counter2 = createCounter();
console.log(counter2()); // => 1

console.log('Here you can acces the count variable /n');

function Counter() {
    this._count = 0;
}

Counter.prototype.fire = function () {
    this._count += 1;
    return this._count;
}

let counter1 = new Counter();
counter1.fire(); // 1
counter1.fire(); // 2
counter1._count // 2
counter1._count = 0 // 0 (this works);

