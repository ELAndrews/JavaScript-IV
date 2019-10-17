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
        return `${this.name} has submitted PR for ${subject}.`
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}