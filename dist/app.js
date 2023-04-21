"use strict";
class Person {
    constructor(firstname, lastname, nationalId, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.nationalId = nationalId;
        this.age = age;
    }
}
const person1 = new Person("Ali", "Darvish", "1234567890", 28);
class Student extends Person {
    constructor(studentId, scoreAverage, firstname, lastname, nationalId, age) {
        super(firstname, lastname, nationalId, age);
        this.studentId = studentId;
        this.scoreAverage = scoreAverage;
        this.marriage = false;
    }
}
const student2 = new Student(2, 20, "Maryam", "Goodarzi", "1234567891", 28);
const student1 = { ...person1 };
student1.scoreAverage = 22;
student1.studentId = 1;
const mainStudent1 = new Student(1, 20, person1.firstname, person1.lastname, person1.nationalId, person1.age);
class MaktabStudent extends Student {
    constructor(graduated, course, hasJob, position, studentId, scoreAverage, firstname, lastname, nationalId, age) {
        super(studentId, scoreAverage, firstname, lastname, nationalId, age);
        this.graduated = graduated;
        this.course = course;
        this.hasJob = hasJob;
        this.position = position;
    }
    marriageState() {
        return this.marriage;
    }
}
class ComputerScience extends Student {
    constructor(graduated, studentId, scoreAverage, firstname, lastname, nationalId, age) {
        super(studentId, scoreAverage, firstname, lastname, nationalId, age);
        this.graduated = graduated;
    }
}
const student3 = new MaktabStudent(false, "Nodejs", false, "Back-end", 2, 20, "Maryam", "Goodarzi", "1234567891", 28);
const student4 = new ComputerScience(false, 2, 20, "Nima", "Behesht Aiyn", "1234567892", 20);
console.log(student3.marriageState());
//# sourceMappingURL=app.js.map