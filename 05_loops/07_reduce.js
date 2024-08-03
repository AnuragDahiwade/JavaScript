
myNums = [1 ,2, 3]

// const tot = myNums.reduce( function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 4)

// const myTotal = myNums.reduce( function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, currval) => acc + currval , 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 1999
    },
    {
        itemName: "mobile dev",
        price: 8999
    },
    {
        itemName: "spring boot",
        price: 6499
    },
]


const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price ,0)
console.log(priceToPay);
