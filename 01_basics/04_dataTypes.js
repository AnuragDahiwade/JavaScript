
// ---- 04_dataTypes


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// let age = 33
// console.log(typeof age); // number

// let sirname = "namgive"
// console.log(typeof sirname); // string

// let nullVal = null
// console.log(typeof nullVal); // object

// let name
// console.log(name); // undefined


// let id = Symbol('123')
// let anotherId = Symbol('123')
// console.log(id, typeof id ,"   ", anotherId, typeof anotherId );
// console.log(id === anotherId);


// let normalNumber = 99332244554333000000000009999999999
// let bigNumber = 99332244554333000000000009999999999999999n
// console.log(normalNumber, typeof normalNumber);
// console.log(bigNumber, typeof bigNumber);


// const maxNumber = Number.MAX_SAFE_INTEGER; // 9007199254740991
// const bigInt = BigInt(maxNumber) + 1n; // 9007199254740992n

// console.log(maxNumber + 1); // 9007199254740992 (loses precision)
// console.log(bigInt); // 9007199254740992n (maintains precision)




/// Arrays

let heros = ["Iron Man", "Captain America", "Hulk", "DeadPool", "Wolvorine", "Dr. Strange"]
console.log(typeof heros, heros);

let myObj = {
    "age": 33,
    "name": "anurag"
}
console.log(typeof myObj, myObj);

const myFunction = function(){
    console.log("I am in the functions boyssssss!!!!!");
}
console.log(typeof myFunction, myFunction);


