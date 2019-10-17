/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

//Task 1 -Refactor

class Person{
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.stomach = [];
    }

    eat(food) {
        if (this.stomach.length < 10) {
            this.stomach.push(food);
          }
    }

    poop(){
        this.stomach = [];
    }

    toString() {
        return `${this.name}, ${this.age}`;
    }
}

const person1 = new Person({
    name: "James",
    age: 32
});

console.log(person1);
console.log(person1.toString());

  
//Task 2 - Refactor
  
  
  class Car {
       constructor (model, milesPerGallon) {
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }

    fill(gallons) {
        this.tank += gallons;
    }

    drive(distance) {
        let maxDist = this.tank * this.milesPerGallon;
        if (maxDist > distance) {
          this.odometer += distance;
          let gallonsUsed = distance / this.milesPerGallon;
          this.tank -= gallonsUsed;
        } else {
          this.odometer += maxDist;
          this.tank = 0;
          return `I ran out of fuel at ${this.odometer} miles!`;
        }
    }
}
  
  const bmw = new Car("BMW", 30);
  
  console.log(bmw);

  
//Task 3 - Refactor 

  class Baby extends Person {
      constructor (babyAttr) {
        super(babyAttr)
        this.favoriteToy = babyAttr.favoriteToy;
     }

     play() {
        return `Playing with ${this.favoriteToy}.`;
     }
 }
  
const baby1 = new Baby({
    name: "Jimmy",
    age: 3,
    favoriteToy: "Teddy Bear"
});

console.log(baby1);
console.log(baby1.play());

