
// ++++++++++++++++++++++++++++ 08_dates_in_js


let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


let myCreatedDate = new Date(2023, 0, 11)
// console.log(myCreatedDate.toString());

// myCreatedDate = new Date(2023, 0, 11, 5, 3)
// console.log(myCreatedDate.toLocaleString());

// myCreatedDate = new Date("2023-01-22")
// console.log(myCreatedDate.toLocaleString());

// myCreatedDate = new Date("03-22-2032")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now() / 1000));