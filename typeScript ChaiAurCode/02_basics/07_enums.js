"use strict";
// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 3
Object.defineProperty(exports, "__esModule", { value: true });
var seatChoice;
(function (seatChoice) {
    seatChoice[seatChoice["AISLE"] = 11] = "AISLE";
    seatChoice[seatChoice["MIDDLE"] = 22] = "MIDDLE";
    seatChoice[seatChoice["WINDOW"] = 33] = "WINDOW";
    seatChoice[seatChoice["FOURTH"] = 44] = "FOURTH";
})(seatChoice || (seatChoice = {}));
var seat = seatChoice.MIDDLE;
console.log(seat);
