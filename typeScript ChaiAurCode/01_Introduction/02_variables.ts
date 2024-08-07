

/*
        ***************************************************************************************************

        We need to first compile this .ts file in order to run it later
        use node to run this file later. So Steps are
        > tsc fileName.ts
        > node fileName.ts

        ***************************************************************************************************
*/



let myName: string = "Anurag Dahiwade"

let myNum = 6

// myName.toUpperCase()
// console.log(myName);

let userId: number = 334477
let isTrue: boolean = false
// console.log(isTrue.valueOf);


let hero;

function getHero(){
    return "Thor";
}

function getHeroNumbers(){
    return 21;
}

hero = getHero();
console.log(hero);

hero = getHeroNumbers()
console.log(hero);






export {}