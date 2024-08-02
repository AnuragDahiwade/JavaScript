// const tinderUser1 = new Object()
const tinderUser = {}

// console.log(tinderUser1);
// console.log(tinderUser);

tinderUser.id = "123hghg"
tinderUser.name = "Magnus"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regulerUser = {
    email: "someone@gmail.com",
    fullName: {
        userFullName: {
            firstname: "Anurag",
            lastname: "Dahiwade"
        }
    }
}

// console.log(regulerUser);
// console.log(regulerUser.fullName);
// console.log(regulerUser.fullName.userFullName);
// console.log(regulerUser.fullName.userFullName.firstname);


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);
// console.log(obj1);


// console.log(tinderUser);
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLoggedOut'));


/// ++++++++++++++++++++++ Object De Structuring ++++++++++++++++++++++++

const course = {
    courseName: "JavaScript made easy",
    price: 0,
    courseInstructor: "Chai aur Code",
}

// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);