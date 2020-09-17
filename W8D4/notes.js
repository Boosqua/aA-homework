const obj = {
  name: "Earl Watts",
};

// weird function; how is `this` supposed to be set if we don't call
// `greet` method style?
function greet(msg) {
  console.log(`${msg}: ${this.name}`);
}                     //  ^^ = obj on line 1
                //^^ passed as second arg on line 11
greet.apply(obj, ["Hello"])


global.setTimeout(function () {
  console.log("hello");
}, 2000);
function scheduleGreatMovieReminder(movie) {
  // remind in one min
    global.setTimeout(function () {
    console.log(`Remember to watch: ${movie}`);
  }, 60 * 100);
  console.log(`Timer set for ${movie}`);
}

// scheduleGreatMovieReminder("Citizen Kane");
// scheduleGreatMovieReminder("Touch of Evil");
// scheduleGreatMovieReminder("The Third Man");

const readline = require("readline");

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

// reader.question("What is your name?", function (answer) {
//   console.log(`Hello ${answer}!`);

//   reader.close
// });

console.log("Last program line");



function addTwoNumbers(callback) {
  // Notice how nowhere do I return anything here! You never return in
  // async code. Since the caller will not wait for the result, you
  // can't return anything to them.

  reader.question("Enter #1: ", function (numString1) {
    reader.question("Enter #2: ", function (numString2) {
      const num1 = parseInt(numString1);
      const num2 = parseInt(numString2);

      callback(num1 + num2);
    });
  });
}

addTwoNumbers(function (result) {
  console.log(`The result is: ${result}`);
  reader.close();
});