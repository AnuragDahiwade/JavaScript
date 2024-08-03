
const progLangs = {
    js: "JavaScript",
    py: "Python",
    rb: "Ruby",
    swift: "swift by apple",
    cpp: "c++"
}

for (const key in progLangs) {
    // console.log(key);
}

for (const key in progLangs) {
    // console.log(key, " shortcut is for ", progLangs[key]);
}

let heros = ["Flash", "Dr. Strange", "Spiderman", "Captain America", "Ironman", "Thor"]

for (const key in heros) {
    // console.log(key);
}

for (const key in heros){
    // console.log(key, " ",heros[key]);
}


const map = new Map()

map.set("IN", "India")
map.set("FR", "France")
map.set("USA", "United States of America")
map.set("IN", "India")

for(const key in map){
    // console.log(key); // this Won't print anything
    // console.log(map.get(key));  // this Won't print anything
}








