"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Anurag",
    email: "anurag@gmail.com",
    isActive: false
};
// function createUser({name: string, isActive: boolean}){}
// function createUser({name: string, isActive: boolean}): {name: string, price: number} {
//     return {name: "Anurag", price: 100000000};
// }
// createUser({name: "Anurag", isActive: true});
// createUser({name: "Anurag", isActive: true, email: "anurag@gmail.com"}); // this giver en error
var newUser = { name: "Anurag", isActive: true, email: "anurag@gmail.com" }; // but if we pass this object to the same method then it will work
var myUser = {
    _id: "1234",
    name: "h",
    email: "h@h.com",
    isActive: false
};
myUser.email = "g@g.com";
var carddetails = {
    cardnumber: "1234",
    cardname: "Mastersoft",
    cvv: 332,
    carddate: "2024-03-30"
};
console.log(carddetails);
