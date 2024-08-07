
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
        readonly city: string = "Nagpur"
        // private _courseCount: number = 1
        protected _courseCount: number = 1

        constructor(
            public email: string, 
            public name: string){
        }

        get getAppleEmail(): string {
            return `apple${this.email}`
        }

        get getCourseCount(): number {
            return this._courseCount;
        }

        set setCourseCount(num: number) {
            this._courseCount = this._courseCount + num
        } 
    }

    class SubUser extends User {// console.log(user1.getUser());
        // console.log(user1.email, user1.name);
        
        // user1.setCourseCount = 8
        // const num = user1.getCourseCount
        // console.log(num);
        isFamily: boolean = false

        set changeCourseCount(num: number){
            this._courseCount = num
        }
    }


// let user1 = new User("anurag", "anurag.dahiwade@gmail.com")
let user1 = new User("anurag", "anurag.dahiwade@gmail.com")
user1.setCourseCount = 21
// user1.city = "Nagpur"

let user2 = new SubUser("gg", "ggyy")
user2.changeCourseCount = 90

let n = user1.getCourseCount
let n2 = user2.getCourseCount

// console.log(n, n2);


// // console.log(user1.getUser());
// console.log(user1.email, user1.name);

// user1.setCourseCount = 8
// const num = user1.getCourseCount
// console.log(num);


// export {}
