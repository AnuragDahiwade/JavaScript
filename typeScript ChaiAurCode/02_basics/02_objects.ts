
const user = {
    name: "Anurag",
    email: "anurag@gmail.com",
    isActive: false
}


// function createUser({name: string, isActive: boolean}){}

// function createUser({name: string, isActive: boolean}): {name: string, price: number} {
//     return {name: "Anurag", price: 100000000};
// }


// createUser({name: "Anurag", isActive: true});
// createUser({name: "Anurag", isActive: true, email: "anurag@gmail.com"}); // this giver en error

let newUser = {name: "Anurag", isActive: true, email: "anurag@gmail.com"} // but if we pass this object to the same method then it will work

// let u = createUser(newUser);  // object is passed here and it don't give any error
                              // So this the the weired behaviours of ts... so not all the weired behaviours of js is not gone totally
// console.log(newUser);
// console.log(u);


/*
type User = {
    name: string,
    email: string,
    isActive: boolean
}

function createUser( user: User){
    return user.name + " " + user.email + " " + user.isActive
}

function createUser2( user: User) : User{
    // return user.name + " " + user.email + " " + user.isActive
    let newU = {name: user.name, email: user.email, isActive: user.isActive}
    return newU
}

let u2 = createUser2({name: "anu", email: "anu@anu.com", isActive: false})
console.log(u2);


createUser({name: "anu", email: "anu@anu.com", isActive: false})
let u = createUser(newUser); 
// console.log(u);
*/



type User =  {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    cardDetails?: number  // this is same as flutter ?(question mark) means that this field is optional it can be given or it cannot be give both are possible
}

let myUser: User = {
    _id: "1234",
    name: "h",
    email: "h@h.com",
    isActive: false
}

myUser.email = "g@g.com"
// myUser._id = "223344"   // This is not allowed because we made the '_id' field as 'readonly'
// console.log(myUser);


type cardNumber = {
    cardnumber: string
}
type cardName = {
    cardname: string
}
type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardName & {
    cvv: number
} & cardDate;

let carddetails: cardDetails = {
    cardnumber: "1234",
    cardname: "Mastersoft",
    cvv: 332,
    carddate: "2024-03-30"
}
console.log(carddetails);


export {}