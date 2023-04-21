class Person {
  constructor(
    public firstname: string,
    public lastname: string,
    public nationalId: string,
    public age: number
  ) {}
}

const person1: Person = new Person("Ali", "Darvish", "1234567890", 28);

class Student extends Person {
  constructor(
    public studentId: number,
    public scoreAverage: number,
    public marriage: boolean,
    firstname: string,
    lastname: string,
    nationalId: string,
    age: number
  ) {
    super(firstname, lastname, nationalId, age);
  }
}

const student2: Student = new Student(
  2,
  20,
  false,
  "Maryam",
  "Goodarzi",
  "1234567891",
  28
);
const student1: Student = { ...person1 } as Student;
student1.scoreAverage = 22;
student1.marriage = false;
student1.studentId = 1;

const mainStudent1: Student = new Student(
  1,
  20,
  true,
  person1.firstname,
  person1.lastname,
  person1.nationalId,
  person1.age
);

class MaktabStudent extends Student {
  constructor(
    public graduated: boolean,
    public course: string,
    public hasJob: boolean,
    public position: string,
    studentId: number,
    scoreAverage: number,
    marriage: boolean,
    firstname: string,
    lastname: string,
    nationalId: string,
    age: number
  ) {
    super(
      studentId,
      scoreAverage,
      marriage,
      firstname,
      lastname,
      nationalId,
      age
    );
  }
}

class ComputerScience extends Student {
  constructor(
    public graduated: boolean,
    studentId: number,
    scoreAverage: number,
    marriage: boolean,
    firstname: string,
    lastname: string,
    nationalId: string,
    age: number
  ) {
    super(
      studentId,
      scoreAverage,
      marriage,
      firstname,
      lastname,
      nationalId,
      age
    );
  }
}

const student3: MaktabStudent = new MaktabStudent(
  false,
  "Nodejs",
  false,
  "Back-end",
  2,
  20,
  false,
  "Maryam",
  "Goodarzi",
  "1234567891",
  28
);

const student4: ComputerScience = new ComputerScience(
  false,
  2,
  20,
  false,
  "Nima",
  "Behesht Aiyn",
  "1234567892",
  28
);
