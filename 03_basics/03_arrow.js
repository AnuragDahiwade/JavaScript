

const user = {
    username: "Anurag",
    price: 33,

    welcomemessage: function(){
        console.log(`${this.username} Welcome to website`);
        // console.log(this);
    }
}
// console.log(user);
// console.log(user.welcomemessage);
// console.log(user.welcomemessage());

// user.username = "Hitesh"
// console.log(user.username);
// user.welcomemessage();
// console.log(user);



// console.log(this);

function chai(){
    let username = "Anurag"
    // console.log(this.username); // wont work this keywork only works with the Objects
    console.log(this);
}
// chai()

let coffee = function(){
    let username = "Anurag"
    console.log(this.username); // wont work this keywork only works with the Objects
    // console.log(this);
}
// coffee()


//  ARROW FUNCTION
let juice = () => {
    let username = "Anurag"
    // console.log(this.username); // wont work this keywork only works with the Objects
    // console.log(this);
}
// juice()

// () => {}
// () => {
//     console.log("Basic Syntax");
// }


// let addTwo = ( num1, num2 ) => {
//     return (num1 + num2);
// }

// let addTwo = ( num1, num2 ) => num1 + num2

// let addTwo = ( num1, num2 ) => ( num1 + num2 )

// let addTwo = ( num1, num2 ) => {username: "anurag"}

// let addTwo = ( num1, num2 ) => ({username: "anurag"})

// console.log(addTwo(3, 4));




const myArray = [2,3,4,6,8,9]

myArray.forEach( function(num) {
    console.log(num * 2);
})

myArray.forEach((num) => {
    // console.log(num * 2);
})


// myArray.forEach((num) => (num * 2))

// console.log(myArray);
    
console.log(list);



