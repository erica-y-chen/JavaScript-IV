// CODE here for your Lambda Classes
//---------------------Person
class Person { 
    constructor(attributes) {
        this.name = attributes.name; 
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }

    //methods
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}


//---------------------Instructor
class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes)
        this.specialty = instructorAttributes.specialty; 
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase; 
    }

    //methods
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }

    grade(student) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}


//---------------------Student
class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes)
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }

    //methods
    listsSubjects() {
      return `${favSubjects}`
    }
    
    PRAssignment(subject) {
      return `${this.name} has submitted a PR for ${subject}`; 
    }
  
    sprintChallenge(subject) {
      return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

//---------------------PM
class ProjectManager extends Instructor {
    constructor(PMAttributes) {
        super(PMAttributes)
        this.gradClassName = PMAttributes.gradClassName;
        this.favInstructor = PMAttributes.favInstructor; 
    }

    //methods
     standUp(channel) {
      return `${this.name} announces to ${channel}, @channel standy times!`;
    }
  
    debugsCode(student, subject) {
      return `${this.name} debugs ${student}'s code on ${subject}`;
    }
  
}


//-------

const Josh = new Instructor ({
  name: 'Josh',
  age: 34, 
  specialty: 'Javascript',
  favLanguage: "Java",
  location: 'Utah',
})


const Paula = new ProjectManager ({
  name: 'Paula',
  age: 25, 
  specialty: 'Javascript',
  favLanguage: "CSS",
  location: 'SF',
  
})


console.log(Josh.name);
console.log(Josh.demo("java"));
console.log(Paula.standUp("Web18"));
console.log(Paula.debugsCode("Erica", "Javascript"));


