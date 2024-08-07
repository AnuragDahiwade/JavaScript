
const score: Array<number> = []
const heros: Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any): any {
    return val
}


function identityThree<Type>(val: Type): Type {
    return val
}

function identityFour<T>(val: T): T {
    return val
}

// console.log(identityThree(99));
// console.log(identityThree(false));
// console.log(identityThree("Anurag"));


interface Bottol {
    brand: string
    quantity: number
}

function identityFive<Bottol>(val: Bottol): Bottol {
    return val
}

let five = identityFive({brand: "Bislery", quantity:1000})
// console.log(five);

function getSearchProducts<T>(products: T[]): T {
    // some Complex db oprations
    const index = 2
    return products[index]
}

const getMoreSearchProducts = <T, >(products: T[]): T => {
    // some Complex db oprations
    const index = 2
    return products[index]
}



interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(val1: T, val2: U): object{
    return { val1, val2 }
}

const db = anotherFunction(33, {connection: "mongodb", username: "u1", password: "p1"})
// console.log(db);



interface Quize {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class sellable<T> {
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}



