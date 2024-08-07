"use strict";
// function addTwo(num){
//     return num + 2;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// function addTwo(num: number){
//     return num + 2
// }
// this should not possible to return the string it should return a number we can do this by below method
function addTwo(num) {
    // return "Hello"
    return num + 2;
}
var num = addTwo(5);
// console.log(num);
function toUpper(val) {
    return val.toUpperCase();
}
var upper = toUpper("anurag");
// let upper = toUpper(4);
// console.log(upper);
function signUpUser(name, email, isPaid) {
}
signUpUser("Goli", "goli@gmail.com", false);
var loginUser = (function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
});
loginUser("Goli", "goli@gmail.com");
var heros = ["Ironman", "Thor", "Hulk", "Hawkeye"];
var goodHeros = heros.map(function (hero) {
    return 4;
    // return `Hero is ${hero}`
});
console.log(goodHeros);
