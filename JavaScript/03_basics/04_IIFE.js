//  Immediately Invoked Function Expression (IIFE)

(function chai() {
    console.log("DB CONNECTED");
})();


// first perethesis is for function defination
// second perenthesis is for fuction exicution
// Need to put the ; (semicolon) to end the exicution of the code the release the scope

( function coffee() {
    console.log("DB CONNECTED TWO");
})();


(() => {
    console.log("DB CONNECTED THREE");
})();


( function coffee(name) {
    console.log(`DB CONNECTED TWO ${name}`);
})("MYSQL");


((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("SqLite3");