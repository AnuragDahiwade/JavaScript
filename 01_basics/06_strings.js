
// +++++ 06_strings.js


// let str = "This is a String";
// console.log(str);

// let newStr = `This is also a string`;
// console.log(newStr);

// let name = "atom"
// let age = 22
// let skills = "java, sql"
// let info = `my name is ${name}, I am ${age} years old and i have skills in ${skills}`
// console.log(info);


let str = "This is String"
// console.log(str[3]);
// console.log(str.__proto__);


// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.charAt(8));
// console.log(str.indexOf("S"));


// const newSubString = str.substring(5, 7) // it dont obey the negative values
// console.log(newSubString);

// const newSlice = str.slice(-8, 4)
// console.log(newSlice);


// let s = "    atom      "
// console.log(s);
// console.log(s.trim());


let url = "https://atom.com/atom%20develops"
let newurl = url.replace("%20", "-")
console.log(newurl);

console.log(url.includes("atom"));
console.log(url.includes("library"));


let strnew = "This-is-a-dashed-string";
let arr = strnew.split("-")
let arr2 = strnew.split("-", 3)
console.log(arr);
console.log(arr2);