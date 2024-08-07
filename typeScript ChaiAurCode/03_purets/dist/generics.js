"use strict";
const score = [];
const heros = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
function identityFive(val) {
    return val;
}
let five = identityFive({ brand: "Bislery", quantity: 1000 });
// console.log(five);
function getSearchProducts(products) {
    // some Complex db oprations
    const index = 2;
    return products[index];
}
const getMoreSearchProducts = (products) => {
    // some Complex db oprations
    const index = 2;
    return products[index];
};
function anotherFunction(val1, val2) {
    return { val1, val2 };
}
const db = anotherFunction(33, { connection: "mongodb", username: "u1", password: "p1" });
class sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
