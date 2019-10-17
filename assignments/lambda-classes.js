
// CODE here for your Lambda Classes

class Person {
    constructor (attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }

}

const matt = new Person({
    name: "Matt",
    age: 36,
    location: "Norwich, UK",
})

const wallace = new Person({
    name: "Wallace",
    age: 29,
    location: "Amsterdam, Netherlands",
})

console.log(matt);
console.log(matt.speak());
console.log(wallace);
console.log(wallace.speak());

class Instructor extends Person {
    constructor (attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}`;
    }
}

const alex = new Instructor({
    name: "Alex",
    age: 27,
    location: "London, UK",
    specialty: "react",
    favLanguage: "JavaScript",
    catchPhrase: "Nice!"
})

const gabe = new Instructor({
    name: "Gabe",
    age: 30,
    location: "Spain",
    specialty: "Node.js",
    favLanguage: "Python",
    catchPhrase: "Hot Potatoes?"
})

console.log(alex.speak());
console.log(alex.demo("LESS"));
console.log(gabe.speak());
console.log(gabe.grade("Nick", "API's"));

class Student extends Person {
    constructor (attr){
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubject = attr.favSubject;
    }

    listsSubjects() {
        return this.favSubject.split();
    }

    PRAssignment(subject){
        return `${this.name} has submitted PR for ${subject}.`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

const emma = new Student({
    name: "Emma",
    age: 28,
    location: "Norwich, UK",
    previousBackground: "None",
    className: "WEBEU4",
    favSubject: "JavaScript, Python, HTML"
})

const nick = new Student({
    name: "Nick",
    age: 23,
    location: "Hamburg Germany",
    previousBackground: "Self-taught Code",
    className: "WEBEU4",
    favSubject: "LESS, HTML"
})

console.log(emma.speak());
console.log(emma.listsSubjects());
console.log(emma.PRAssignment("JS-VI"));
console.log(nick.speak());
console.log(nick.sprintChallenge("Advanced CSS"));

class PM extends Instructor {
    constructor (attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}`;
    }
}

const chinedu = new PM({
    name: "Chinedu",
    age: 25,
    location: "Nigeria",
    specialty: "EVERYTHING",
    favLanguage: "Node.js",
    catchPhrase: "Oh I see...",
    gradClassName: "WEBEU1",
    favInstructor: "Gabe"
})

const anu = new PM({
    name: "Anu",
    age: 25 ,
    location: "Nigeria",
    specialty: "LESS",
    favLanguage: "JavaScript",
    catchPhrase: "lets see the code!",
    gradClassName: "WEBEU1",
    favInstructor: "Alex"
})

console.log(chinedu.speak());
console.log(chinedu.demo("JavaScript"));
console.log(chinedu.standUp("WEBEU4_chinedu"));
console.log(anu.speak());
console.log(anu.grade("Nick", "LESS"));
console.log(anu.debugsCode("John", "HTML"));