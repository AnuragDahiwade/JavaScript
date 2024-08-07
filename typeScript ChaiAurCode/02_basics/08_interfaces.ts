
interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string,
    startTrail(): string
    getCoupon(couponname: string, value: number): number 
}
interface User {
    gitHubToken: string
}
const anu: User = {
    dbId: 2290,
    email: "a@ad.com",
    userId: 309,
    startTrail: () => {
        return "trail only"
    },
    getCoupon: (couponName: "anu10", off: 10) => {
        return 10
    },
    gitHubToken: "AnuragDahiwade"
}


console.log(anu);



interface Admin extends User{
    role: "admin" | "ta" | "learner"
}

let vaish: Admin = {
    dbId: 112233,
    email: "vaish@gmail.com",
    userId: 3,
    startTrail: () => {
        return "trial is is mid work"
    },
    getCoupon: (cname: string, val: number) => {
        return val
    },
    gitHubToken: "vaishBangar",
    role: "learner"
}

console.log(vaish);


export {}
