"use strict";
// console.log("typeScript is here");
// console.log("typeScript is amazing");
// class User {
//     email: string
//     name: string
//     readonly city: string = "Nagpur"
//     constructor(email: string, name: string){
//         this.email = email
//         this.name = name
//     }
//     getUser(){
//         return `user name : ${this.name} \nuser email : ${this.email}`
//     }
// }
// THIS CLASS IS AS SAME AS THE ABOVE CLASS ONLY THE SYNTACTIC DIFFERENCE
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Nagpur";
        // private _courseCount: number = 1
        this._courseCount = 1;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get getCourseCount() {
        return this._courseCount;
    }
    set setCourseCount(num) {
        this._courseCount = this._courseCount + num;
    }
}
class SubUser extends User {
    constructor() {
        // console.log(user1.email, user1.name);
        super(...arguments);
        // user1.setCourseCount = 8
        // const num = user1.getCourseCount
        // console.log(num);
        this.isFamily = false;
    }
    set changeCourseCount(num) {
        this._courseCount = num;
    }
}
// let user1 = new User("anurag", "anurag.dahiwade@gmail.com")
let user1 = new User("anurag", "anurag.dahiwade@gmail.com");
user1.setCourseCount = 21;
// user1.city = "Nagpur"
let user2 = new SubUser("gg", "ggyy");
user2.changeCourseCount = 90;
let n = user1.getCourseCount;
let n2 = user2.getCourseCount;
// console.log(n, n2);
// // console.log(user1.getUser());
// console.log(user1.email, user1.name);
// user1.setCourseCount = 8
// const num = user1.getCourseCount
// console.log(num);
// export {}
