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
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standup time!`
    }
    debugsCode(student, subject) {
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