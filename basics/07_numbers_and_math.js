

// ++++++++ 07_numbers_and_math


// let score = 400
// console.log(score);

// const scoreNumber = new Number(300/7)
// console.log(scoreNumber);

// console.log(scoreNumber.toString());
// console.log(scoreNumber.toFixed());
// console.log(scoreNumber.toFixed(4));
// console.log(scoreNumber.toString().length);

// const otherNumber = 12.8799
// console.log(otherNumber.toPrecision(3));

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);


// ++++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-44));
// console.log(Math.round(4.7));
// console.log(Math.round(4.3));

// console.log(Math.floor(5.2));
// console.log(Math.ceil(5.2));

// console.log(Math.sqrt(66));

// console.log(Math.min(5,6,7,3,4,6));
// console.log(Math.max(5,6,7,3,4,6));


// for (let index = 0; index < 10; index++) {
//     console.log(Math.floor(Math.random() * 100)+1);
// }

const min = 10
const max = 30

let randValue = Math.floor(Math.random() * (max - min + 1) + min)
console.log(randValue);


for (let index = 0; index < 10; index++) {
    let randValue = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(randValue);
}



