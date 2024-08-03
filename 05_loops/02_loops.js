let heros = ["Flash", "Dr. Strange", "Spiderman", "Captain America", "Ironman", "Thor"]
// of

// for(const name of heros){
//     console.log(name);
// }


// let greetings = "hello anurag!!!"
// for(let greet of greetings){
//     console.log(`Each char is ${greet}`);
// }


const map = new Map()

map.set("IN", "India")
map.set("FR", "France")
map.set("USA", "United States of America")
map.set("IN", "India")

// console.log(map);

// for(const key of map){
//     console.log(key);
// }

for(const [key, value] of map){
    // console.log(key , " : ", value);
}


const games = {
    game1: "Need For Speed",
    game2: "Spider man",
    game3: "GTA5"
}

// for(const key of games){  /// Object cant be iterated like this there are other ways to do this
//     console.log(key);
// }




