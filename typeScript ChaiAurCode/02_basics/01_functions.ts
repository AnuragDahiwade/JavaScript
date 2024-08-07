
// function addTwo(num){
//     return num + 2;
// }

// function addTwo(num: number){
//     return num + 2
// }

// this should not possible to return the string it should return a number we can do this by below method
function addTwo(num: number): number{
    // return "Hello"
    return num + 2
}

let num = addTwo(5);
// console.log(num);


function toUpper(val){
    return val.toUpperCase();
}

let upper = toUpper("anurag");
// let upper = toUpper(4);
// console.log(upper);

function signUpUser(name: string, email: string, isPaid: boolean){

}
signUpUser("Goli" , "goli@gmail.com", false);

let loginUser = ( (name: string, email: string, isPaid: boolean = false) => {

})
loginUser("Goli" , "goli@gmail.com");




const heros = ["Ironman", "Thor", "Hulk", "Hawkeye"]

const goodHeros = heros.map( (hero): string => {
    // return 4
    return `Hero is ${hero}`
})

// console.log(goodHeros);


function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw new Error(errmsg)
}
export {}