
// +++++++++++ 01_arrays


const myArr = [1,2,3,4,5]
const myHeros = ["Iron Man", "Dr. Strange", "Spider Man"]

const myArr2 = new Array("Atom", "Neutron", "Proton")

// console.log(myArr[0]);


// ++++++++++++++++++++ Arrays Methods ++++++++++++++++++++++++++++++++++

// myArr.push(6)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// console.log(myArr);

// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(99));
// console.log(myArr.indexOf(4));

// const newArray = myArr.join()
// console.log(newArray);
// console.log(typeof newArray);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++ IMP ++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++ slice, splice
console.log("A ", myArr);

const myn1 = myArr.slice(2,4)
console.log(myn1);
console.log("A ", myArr);

const myn2 = myArr.splice(2,4)
console.log(myn2);
console.log("A ", myArr);



