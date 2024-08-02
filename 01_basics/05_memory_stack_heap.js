
// +++++++++ 05_memory_stack_heap


// Stack (Primitive), Heap (Non-Primitive)

// when your change something of get from the (stack memory} then you get the COPY of it
// when your change something of get from the (heap memory) then you get the REFERENCE of it

// let userName1 = "anurag"
// let userName2 = userName1

// console.log(userName1);
// console.log(userName2);

// userName1 = "Gopal"
// console.log(userName1);
// console.log(userName2);




let userOne = {
    email: "userone.gmail.com",
    age: 32
}
let userTwo = userOne
userTwo.email = "golamgolu.gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
