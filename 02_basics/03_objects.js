
// singlton
// Object.create()

// Object literals

const mySym = Symbol("myKey1")

const jsUser = {
    name: "Anurag",
    "full name": "Anurag Dahiwade",
    [mySym]: "Key One",
    age: 21,
    email: "anurag.d@chatgpt.com",
    location: "Nagpur",
    isLoggedIn: false,
    lastLogInDays: ["Saturday", "Friday"]
}

// console.log(jsUser.name);
// console.log(jsUser['name']);

// console.log(jsUser["full name"]);

// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);



// jsUser.email = "golam@ai.com"
// console.log(jsUser["email"]);

// Object.freeze(jsUser)

// jsUser.email = "Gadha@gui.app"
// console.log(jsUser["email"]);




jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log("Hello JS user", this.name);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());