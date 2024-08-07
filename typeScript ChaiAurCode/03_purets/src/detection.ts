
function detectType(val: number | string) {
    if(typeof val == "string"){
        return val.toUpperCase()
    }
    return val + 9
}


function provideId(id: string | null) {
    if(!id){
        console.log("please provide id");
        return 
    }
    return id.toUpperCase()
}


function printAll(strs: string | string[] | null) {
    if(strs) {
        if(typeof strs == 'object'){
            for(let s of strs){
                console.log(s);
            }
            return
        }else if(typeof strs == 'string'){
            console.log(strs);
            return
        }
    }
    console.log("Empty string");
    
}

// printAll("atom")
// printAll("")
// printAll(["anu", "tanu", "manu"])





interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
    if("isAdmin" in account){
        return account.isAdmin
    }

    return false;
}

// console.log("is the user Admin : " ,isAdminAccount({name: "", email: "", isAdmin: true}));
// console.log("is the user Admin : " ,isAdminAccount({name: "", email: "", isAdmin: false}));
// console.log("is the user Admin : " ,isAdminAccount({name: "d", email: "ss"}));


let currDate = new Date
// console.log(logValue(currDate));
function logValue(x: string | Date) {
    if(x instanceof Date){
        console.log(x.toUTCString());
    }else {
        console.log(x.toUpperCase());
    }
}


type Fish = { swim: () => void }
type Bird = { fly: () => void }

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function isBird(pet: Fish | Bird ){
    return (pet as Bird).fly !== undefined
}

function getFood(pet: Fish | Bird) {
    if(isFish(pet)){
        pet
        return `Fish Food`
         
    } else{
        pet
        return `Bird Food`
    }
}


// function getFood(pet: Fish | Bird) {
//     if(isFish(pet)){
//         return `Fish Food`
//     }

//     if(isBird(pet)){
//         return `Bird Food`
//     }
// }




interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Rectangle

function getTrueShapeArea(shape: Shape) {
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2
    }

    return shape.length * shape.width
}

type NewShape = Circle | Rectangle | Square

function getArea(shape: NewShape) {
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2
        case "rectangle":
            return shape.length * shape.width
        case "square":
            return shape.side * shape.side

        default:
            const _defaultForShape: never = shape
            return _defaultForShape

    }
}