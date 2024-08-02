

// function addTwoNumbers(num1 , num2){
//     console.log(num1 + num2);
//     return num1 + num2;
// }

// let res = addTwoNumbers(3, 5);
// console.log("Result: ", res);



// function logInUserMessage(username){
//     if(username === undefined){
//         console.log("Please Enter a Username");
//         return
//     }
//     return `${username} just logged In` 
// }

// logInUserMessage("Anurag")

// let res = logInUserMessage("Anurag")
// console.log(res);

// let res = logInUserMessage()
// console.log(res);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function calculateCartPrice(...nums){
    let sum = 0;
    nums.forEach(element => {
        sum += element;
    });
    return sum;
}

let price = calculateCartPrice(11,32,45,67);
// console.log(price);


let user = {
    username: "anurag",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "code",
//     price: 77
// })


let myNewArray = [300, 200, 500, 2000]
function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue( [300, 200, 500, 2000] ));


