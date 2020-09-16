console.log('First:');

function mysteryScoping1() {
    var x = 'out of block';
    if (true) {
        var x = 'in black';
        console.log(x);
    }
    console.log(x);
}
mysteryScoping1()
console.log('Second:');

function mysteryScoping2() {
    const x = 'out of block';
    if (true) {
        const x = 'in block';
        console.log(x);
    }
    console.log(x);
}
mysteryScoping2()
console.log('Third:');

function mysteryScoping3() {
    const x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}
// mysteryScoping3()
console.log('Fourth:');

function mysteryScoping4() {
    let x = 'out of the block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    console.log(x);
}
mysteryScoping4()
console.log('Fifth:');

function mysteryScoping5() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    let x = 'out of block again';
    console.log(x)
}
// mysteryScoping5()

function madLib(verb, adj, noun) {
    console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase(2)} ${noun.toUpperCase()}.`);
}

// madLib("crush", "hard", "rocks");

function isSubstring(searchString, subString) {
  return searchString.search(subString) !== -1;
}

// console.log(isSubstring("im starting to get sleepy", "sleepy"));

function fizzDivis(checkNum, divNum) {
    return checkNum % divNum === 0;
}

function fizzBuzz(array) {
    let fizzBuzzed = [];
    for(let i = 0; i < array.length; i++) {
        if(fizzDivis(array[i], 3) !== fizzDivis(array[i], 5)) fizzBuzzed.push(array[i]);
    }
    return fizzBuzzed;
}
const fizzing = [3, 5, 15];

// console.log(fizzBuzz(fizzing));

function isPrime(n) {
    if (n < 2) {
        return false
    }

    let i = 2
    while(i < n){
        if (n % i === 0) {
            return false;
        }
        i++
    }

    return true
}

// console.log(isPrime(2))
// console.log(isPrime(10))
// console.log(isPrime(15485863));
// console.log(isPrime(3548563));

function sumOfNPrimes(n) {
    let sum = 0;
    for(let i = 0; n > 0; i++) {
        if (isPrime(i)) {
            sum += i
            n--
        }
    }
    console.log(sum);
    return sum
}

sumOfNPrimes(0)
sumOfNPrimes(1)
sumOfNPrimes(4)
sumOfNPrimes(300)