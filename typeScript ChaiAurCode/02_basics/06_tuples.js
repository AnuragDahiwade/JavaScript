"use strict";
// const user: (string | number)[] = ["ar", 33, "top"]
Object.defineProperty(exports, "__esModule", { value: true });
var tUser;
// tUser = [3, true, "something"]  // This gives error because the order of declaration is not being followed
tUser = ["some name or something", 3, false]; // this works
console.log(tUser);
var rgb = [33, 55, 221];
var uName = [22, "go lang"];
uName[0] = 43;
uName.push(true);
console.log(uName);
