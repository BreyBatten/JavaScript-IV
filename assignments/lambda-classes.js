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
