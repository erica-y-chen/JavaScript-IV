// CODE here for your Lambda Classes
//---------------------Person
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

  grade(student, subject) {
      return `${student} receives a perfect score on ${subject}`;
  }

  changeGrade(Student) {
      Student.grade -= (Math.random()< 0.5 ? -1 : 1)*100 | 0;
        if (Student.grade>100) {
        Student.grade-=100; 
      }
      else if (Student.grade<0) {
        Student.grade = (Student.grade)*(-1)
      }
      return `${Student.name}'s grade is now ${Student.grade}`;
  }
}


//---------------------Student
class Student extends Person {
  constructor(studentAttributes) {
      super(studentAttributes)
      this.previousBackground = studentAttributes.previousBackground;
      this.className = studentAttributes.className;
      this.favSubjects = studentAttributes.favSubjects;
      this.grade = Math.random() * 100 | 0;
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

  graduate() {
    if (this.grade > 70) {
      return `Ready to graduate!`
    }
    else
      return `try again`;
  }
}   


// Add a graduate method to a student.
// This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
// If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.


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

const Erica = new Student ({
name: 'Erica',
age: 25, 
specialty: 'Javascript',
favLanguage: "CSS",
location: 'SF',
favSubjects: ["CSS", "Java", "HTML"]
})


// console.log(Josh.name);
// console.log(Josh.demo("java"));
// console.log(Paula.standUp("Web18"));
// console.log(Paula.debugsCode("Erica", "Javascript"));
// console.log(Josh.grade("Erica", "Javascript"));
//console.log(Paula.changeGrade(Erica));
console.log(Erica.grade);
console.log(Erica.graduate());

