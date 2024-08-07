// This will avoid the 'any' keyword in the code
var score = 33;
// console.log(`Score : ${score}`);
score = "44";
// console.log(`Score : ${score}`);
score = "Anurag";
var anurag = {
    name: "Anurag",
    id: 38
};
anurag = { username: "Anu", id: 32 };
console.log(anurag);
// function getDbId(id: string | number){
//     console.log(`The DB id is ${id}`)
// }
// getDbId(3)
// getDbId("3")
function getDbId(id) {
    // id = id.toUpperCase()   // this will never work in ts
    if (typeof (id) == "string") {
        id = id.toUpperCase();
    }
    else {
        id = id + 2;
    }
    console.log("The DB id is ".concat(id));
}
// getDbId(3)
// getDbId("3")
var data = [1, 2, 3, 4, 8];
var data2 = ["3", '4', '5'];
// const data3: string[] | number[] = [1, 2, 3, "8"] // This syntax won't work
var data3 = [true, "anu", 3, 34];
var seatAllotment; // now this variable can only have those three values
// console.log(seatAllotment); // this wontl work beacuse we havent given it a name we just declared it
// seatAllotment = "last" /// this wont work
seatAllotment = "middle";
console.log(seatAllotment);
