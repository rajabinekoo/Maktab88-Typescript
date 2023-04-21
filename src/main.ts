// union types
type numericString = string | number;
type calculatorOperatorType = "+" | "-" | "*" | "/";

// prototypes
type sumFuncType = (a: numericString, b: numericString) => number;
type calcFuncType = (
  a: calculatorOperatorType,
  b: numericString,
  c: numericString,
  d?: numericString
) => number;

// structures
// type userType = {
//   uid: number;
//   username: string;
//   password: string;
//   email?: string;
//   sayHello: () => void;
// };

/**
 *
 * @param num1 @type string | number
 * @param num2 @type string | number
 * @returns number
 */
const sum: sumFuncType = (num1: numericString, num2: numericString): number => {
  if (num1 === 0 && num2 === 0) return 0;
  return Number(num1) + Number(num2);
};

const sum2: sumFuncType = (num1, num2) => {
  if (num1 === 0 && num2 === 0) return 0;
  return Number(num1) + Number(num2);
};

const calc: calcFuncType = (
  operator: calculatorOperatorType,
  num1: numericString,
  num2: numericString,
  num3?: numericString
): number => {
  switch (operator) {
    case "+":
      return Number(num1) + Number(num2) + (!!num3 ? Number(num3) : 0);
    case "-":
      return Number(num1) - Number(num2) - (!!num3 ? Number(num3) : 0);
    case "*":
      return Number(num1) * Number(num2) * (!!num3 ? Number(num3) : 1);
    default:
      return Number(num1) / Number(num2) / (!!num3 ? Number(num3) : 1);
  }
};

const isHappy: boolean = true;
const result: number = sum("1", 2);
const programmingLanguage: string = "TypeScript";
const result2: number = calc("-", "3", 2);

type string2 = string;
const carNames: string[] = ["BMW"];
const carNames2: (string | string2)[] = ["405", "206"];
const carNames3: Array<string> = ["Dodge helcat"];
const carNames4: Array<string | string2> = ["Ford mustang"];

// this is bad idea ----------
// const user1: userType = {
//   uid: 1,
//   username: "rajabinekoo",
//   password: "123123",
//   sayHello: function (): void {
//     console.log(`Hello from ${this.username}`);
//   },
// };

// user1.sayHello();

// const user2: userType = {
//   uid: 2,
//   username: "nima",
//   password: "123123",
//   sayHello: function (): void {
//     console.log(`Hello from ${this.username}`);
//   },
// };

// user2.sayHello();
// ----------

// =============== class ===============
// blueprint

class User {
  private nationalId: string = "";
  private phoneNumber: string = "";

  constructor(
    private uid: number,
    public username: string,
    public password: string,
    phoneNumber: string,
    public email?: string
  ) {
    this.phoneNumber = this.formatPhoneNumber(phoneNumber);
  }

  private formatPhoneNumber(phoneNumber: string): string {
    phoneNumber = phoneNumber.replace(/^09/g, "");
    phoneNumber = phoneNumber.replace(/^\+98/g, "");
    return phoneNumber;
  }

  public sayHello(): void {
    console.log(`Hello from ${this.username}`);
  }

  // normal getter function
  public getUid(): number {
    return this.uid;
  }

  // getters and setters
  // class hook
  // can used by programmer as normal properties
  public set setNationalId(newNationalId: string) {
    if (newNationalId.trim().length === 10) {
      this.nationalId = newNationalId;
    }
  }

  public get getNationalId(): string {
    return this.nationalId;
  }

  public set setPhoneNumber(newNumber: string) {
    this.phoneNumber = this.formatPhoneNumber(newNumber);
  }

  public get getPhoneNumber(): string {
    return `09${this.phoneNumber}`;
  }
}

// class User {
//   private uid: number;
//   public username: string;
//   public password: string;
//   public email?: string;
//   public isHappy: boolean = true;

//   constructor(
//     uid: number,
//     username: string,
//     password: string,
//     email?: string
//   ) {
//     this.uid = uid;
//     this.username = username;
//     this.password = password;
//     if (!!email) this.email = email;
//     this.sayHello();
//   }

//   public sayHello(): void {
//     console.log(`Hello from ${this.username}`);
//   }

//   public getUid(): number {
//     return this.uid;
//   }
// }

// function userConstructorFunction(
//   _uid: number,
//   _username: string,
//   _password: string,
//   _email?: string
// ) {
//     this.uid = _uid;
//     this.username = _username;
//     this.password = _password;
//     if (!!_email) this.email = _email;
// }

// instance
const user1: User = new User(1, "rajabinekoo", "123123", "+98999999999");
const user2: User = new User(2, "nima", "123123", "+98999999999");

console.log(user1.getUid());
user2.setNationalId = "1234567890";
console.log(user2.getNationalId);
console.log(user2.getPhoneNumber);

user1.setPhoneNumber = "+98999992222";
console.log(user1.getPhoneNumber);

console.log(user1 instanceof User);

user1.sayHello();
user2.sayHello();

// =====================================
