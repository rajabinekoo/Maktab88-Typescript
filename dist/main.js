"use strict";
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
const sum = (num1, num2) => {
    if (num1 === 0 && num2 === 0)
        return 0;
    return Number(num1) + Number(num2);
};
const sum2 = (num1, num2) => {
    if (num1 === 0 && num2 === 0)
        return 0;
    return Number(num1) + Number(num2);
};
const calc = (operator, num1, num2, num3) => {
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
const isHappy = true;
const result = sum("1", 2);
const programmingLanguage = "TypeScript";
const result2 = calc("-", "3", 2);
const carNames = ["BMW"];
const carNames2 = ["405", "206"];
const carNames3 = ["Dodge helcat"];
const carNames4 = ["Ford mustang"];
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
    constructor(uid, username, password, phoneNumber, email) {
        this.uid = uid;
        this.username = username;
        this.password = password;
        this.email = email;
        this.nationalId = "";
        this.phoneNumber = "";
        this.phoneNumber = this.formatPhoneNumber(phoneNumber);
    }
    formatPhoneNumber(phoneNumber) {
        phoneNumber = phoneNumber.replace(/^09/g, "");
        phoneNumber = phoneNumber.replace(/^\+98/g, "");
        return phoneNumber;
    }
    sayHello() {
        console.log(`Hello from ${this.username}`);
    }
    // normal getter function
    getUid() {
        return this.uid;
    }
    // getters and setters
    // class hook
    // can used by programmer as normal properties
    set setNationalId(newNationalId) {
        if (newNationalId.trim().length === 10) {
            this.nationalId = newNationalId;
        }
    }
    get getNationalId() {
        return this.nationalId;
    }
    set setPhoneNumber(newNumber) {
        this.phoneNumber = this.formatPhoneNumber(newNumber);
    }
    get getPhoneNumber() {
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
const user1 = new User(1, "rajabinekoo", "123123", "+98999999999");
const user2 = new User(2, "nima", "123123", "+98999999999");
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
//# sourceMappingURL=main.js.map