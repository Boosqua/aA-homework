class Dog {
   constructor(name) {
      this.name = name;
   }
   woof() {
      console.log(this.name + "woof");
   }
}


module.exports = Dog;
