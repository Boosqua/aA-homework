console.log('Constructor Functions \n Make a Cat Object \n');

function Kitten(name, age) { //constructors need capped camelcase
    this.name = name;
    this.age = age;

    this.meow = function() {
        if(this.name === "Artemis") return console.log(`${this.name} is a stinky cat`)
        console.log(`${this.name} prrrs`)
    }
}

let apollo = new Kitten('Apollo', 1);
console.log(apollo);
apollo.meow();
let artemis = new Kitten('Artemis', 'evil');
console.log(artemis);
artemis.meow();

console.log(`\n Making Class Methods \n`);

Kitten.caboodle = [apollo, artemis, new Kitten('Mingo', 10)];

Kitten.parade = function() {
    Kitten.caboodle.forEach(kitten => {
        kitten.meow();
    });
};

Kitten.parade();
