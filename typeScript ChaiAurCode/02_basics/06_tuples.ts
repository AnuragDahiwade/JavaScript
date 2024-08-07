
// const user: (string | number)[] = ["ar", 33, "top"]

let tUser: [string, number, boolean]
// tUser = [3, true, "something"]  // This gives error because the order of declaration is not being followed

tUser = ["some name or something", 3, false] // this works

console.log(tUser);


let rgb: [number, number, number] = [33, 55, 221]

type User = [Number, string]

let uName: User = [22, "go lang"]

uName[0] = 43

// uName.push(true)

console.log(uName);


export {}