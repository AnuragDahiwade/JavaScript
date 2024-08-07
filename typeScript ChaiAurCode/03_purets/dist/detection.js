"use strict";
function detectType(val) {
    if (typeof val == "string") {
        return val.toUpperCase();
    }
    return val + 9;
}
function provideId(id) {
    if (!id) {
        console.log("please provide id");
        return;
    }
    return id.toUpperCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs == 'object') {
            for (let s of strs) {
                console.log(s);
            }
            return;
        }
        else if (typeof strs == 'string') {
            console.log(strs);
            return;
        }
    }
    console.log("Empty string");
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}
// console.log("is the user Admin : " ,isAdminAccount({name: "", email: "", isAdmin: true}));
// console.log("is the user Admin : " ,isAdminAccount({name: "", email: "", isAdmin: false}));
// console.log("is the user Admin : " ,isAdminAccount({name: "d", email: "ss"}));
let currDate = new Date;
// console.log(logValue(currDate));
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function isBird(pet) {
    return pet.fly !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return `Fish Food`;
    }
    else {
        pet;
        return `Bird Food`;
    }
}
function getTrueShapeArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    return shape.length * shape.width;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.length * shape.width;
        case "square":
            return shape.side * shape.side;
        default:
            const _defaultForShape = shape;
            return _defaultForShape;
    }
}
