// CODE here for your Lambda Classes
// Person class
class Person {
    constructor(base) {
        this.name = base.name;
        this.age = base.age;
        this.location = base.location;
        this.gender = base.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
}

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects; 
    }
    listsSubjects() {
        this.favSubjects.forEach((value) => console.log(value));
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(name, channel) {
        return `${this.name} announces to ${channel}, "@channel standup time!"`
    }
    debugsCode(name, student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}. `
    }
}

// Student Objects
const brey = new Student({
    name: 'Brey',
    location: 'Virginia',
    age: 25,
    gender: 'male',
    previousBackground: 'Zipline Guide',
    className: 'WEBPT5',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
});
console.log(brey);
console.log(brey.speak());
console.log(brey.listsSubjects(brey.favSubjects));
console.log(brey.PRAssignment('JavaScript-IV'));
console.log(brey.sprintChallenge('JavaScript-IV'));

const john = new Student ({
    name: 'John',
    location: 'Raleigh',
    age: 30,
    gender: 'male',
    previousBackground: 'Personal Trainer',
    className: 'WEBPT5',
    favSubjects: ['JavaScript', 'React', 'Ruby']
});
console.log(john);
console.log(john.speak());
console.log(john.listsSubjects(john.favSubjects));
console.log(john.PRAssignment('JavaScript-IV'));
console.log(john.sprintChallenge('JavaScript-IV'));

// Instructor Objects
const dave = new Instructor({
    name: 'Dave',
    location: 'Utah',
    age: 39,
    gender: 'male',
    specialty: 'JavaScript',
    favLanguage: 'JavaScript',
    catchPhrase: "I don't remember what 'this' is."
});
console.log(dave);
console.log(dave.demo('JavaScript Fundamentals'));
console.log(dave.grade(brey, 'JavaScript'));

const jane = new Instructor({
    name: 'Jane',
    location: 'San Fransisco',
    age: 33,
    gender: 'female',
    specialty: 'C',
    favLanguage: 'C',
    catchPhrase: "I 'C' what you did there!"
});
console.log(jane);
console.log(jane.demo('Python'));
console.log(jane.grade(john, 'React'));

// Project Manager Objects
const leo = new ProjectManager({
    name: 'Leo',
    location: 'Seattle',
    age: 27,
    gender: 'male',
    specialty: 'React',
    gradClassName: 'WEBFT2',
    favInstructor: 'Jane'
});
console.log(leo);
console.log(leo.standUp(leo, 'webpt5_sprint03'));
console.log(leo.debugsCode(leo, brey, 'JavaScript'));

const tatum = new ProjectManager({
    name: 'Tatum',
    location: 'California',
    age: 28,
    gender: 'male',
    specialty: 'CSS',
    gradClassName: 'CS1',
    favInstructor: 'Heather'
});
console.log(tatum);
console.log(tatum.standUp(tatum, 'webpt5_fri'));
console.log(tatum.debugsCode(tatum, john, 'React'));