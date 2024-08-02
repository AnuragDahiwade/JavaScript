

const userEmail = " "

// if(userEmail){
//     console.log("user is logged in with email");
// }else{
//     console.log("Invalid Email");
// }


// TRUTHY AND FALSY VALUES ++++++++++++++++++++++++++++++++++++++++++++++++

// falsy values => false, 0, -0, Biging 0n, "", null, undefined, NaN

// truthy values => all the other are truthy values
//                  "0", "false", " ", [], {}, function(){}


// const myArr = []
// if(myArr.length === 0){
//     console.log("array is emptys");
// }


// const myObj = {}
// if(Object.keys(myObj).length === 0){
//     console.log("Object is emptys");
// }



let val1 = 5

val1 = 5 ?? 10
// console.log(val1);

val1 = null ?? 10
// console.log(val1);

val1 = undefined ?? 33
// console.log(val1);


val1 = null ?? undefined ?? 11 ?? 22 // it will the the first right value 
// console.log(val1);

const icetea = 33
icetea >= 80 ? console.log("Ice tea price is greater than 80") : console.log("Ice tea price is less than 80");


