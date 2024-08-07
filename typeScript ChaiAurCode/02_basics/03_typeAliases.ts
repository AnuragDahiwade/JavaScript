
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
// let u = createUser(newUser); 
// console.log(u);

export {}