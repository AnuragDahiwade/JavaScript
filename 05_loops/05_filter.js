
const coding = ["js", "java", "cpp", "py", "ruby", "dart", "sql"]


// foreach NEVER returns any element or value
const langs = coding.forEach( (ele) => {
    // console.log(ele);
    return ele;
})
// console.log(langs);



let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// FILTER RETURNS VALUES
// const newNums = myNums.filter( (num) => num > 4)

// if you open a scope'{}' the you need to return values whith the use of "return" keyword explicitely
const newNums = myNums.filter( (num) => {
    return num > 4
})

// const newNums = myNums.filter( (num) => {
//     if(num > 4) return num
// })
// console.log(newNums);



const books = [
    {
        "title": "The Great Gatsby",
        "genre": "Fiction",
        "publish": 1925,
        "edition": 1
    },
    {
        "title": "To Kill a Mockingbird",
        "genre": "Fiction",
        "publish": 1960,
        "edition": 1
    },
    {
        "title": "1984",
        "genre": "Dystopian",
        "publish": 1949,
        "edition": 1
    },
    {
        "title": "Pride and Prejudice",
        "genre": "Romance",
        "publish": 1813,
        "edition": 1
    },
    {
        "title": "The Catcher in the Rye",
        "genre": "Fiction",
        "publish": 1951,
        "edition": 1
    },
    {
        "title": "The Hobbit",
        "genre": "Fantasy",
        "publish": 1937,
        "edition": 1
    },
    {
        "title": "Fahrenheit 451",
        "genre": "Dystopian",
        "publish": 1953,
        "edition": 1
    },
    {
        "title": "Moby-Dick",
        "genre": "Adventure",
        "publish": 1851,
        "edition": 1
    },
    {
        "title": "War and Peace",
        "genre": "Historical",
        "publish": 1869,
        "edition": 1
    },
    {
        "title": "The Lord of the Rings",
        "genre": "Fantasy",
        "publish": 1954,
        "edition": 1
    }
]

// const userBooks = books.filter( (book) => book.genre === "Fiction")

// const userBooks = books.filter( (book) => { return book.edition === 1 && book.genre === "Fiction"})

const userBooks = books.filter( (book) => { return book.genre === "Fiction" && book.publish >= 1950} )


console.log(userBooks);


