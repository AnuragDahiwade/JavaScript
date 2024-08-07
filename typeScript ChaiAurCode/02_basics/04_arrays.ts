
const superHeros: string[] = []

superHeros.push("IronMan")
superHeros.push("SpiderMan")
superHeros.push("Dr. Strange")
// console.log(superHeros);


// const superPower: number[] = []
const superPower: Array<number> = []


type User = {
    name: string
    isActive: boolean
}

// const allUsers: Array<User> = []
const allUsers: User[] = []

allUsers.push({name: "anu", isActive: true})
allUsers.push({name: "manu", isActive: true})
allUsers.push({name: "tanu", isActive: false})

console.log(allUsers);


const MLModel: number[][] = [
    [22, 33, 44],
    [55, 44, 33],
    [33],
    [2, 2, 3, 45, 6]
]

console.log(MLModel);



export {}