

const coding = ["js", "java", "cpp", "py", "ruby", "dart", "sql"]

// coding.forEach((item) => {
//     if(item == "js" || item == "java"){
//         console.log(`${item} is a great Programming Language`);
//     }else{
//         console.log(`${item} `);
//     }
// })



function printMe(item){
    console.log(item);
}
// coding.forEach(printMe)

coding.forEach( (item, index, fullArray) => {
    // console.log(item, " ", index, "  ", fullArray);
} )

coding.forEach( (...items) => {
    // console.log(items);
} )



const myCoding = [
    {
        languagename: "javascript",
        languagefilename: "js"
    },
    {
        languagename: "java",
        languagefilename: "java"
    },
    {
        languagename: "ruby",
        languagefilename: "rb"
    },
    {
        languagename: "python",
        languagefilename: "py"
    }
]
myCoding.forEach( (itemObj) => {
    // console.log(itemObj.languagename);
})

myCoding.forEach( (itemObj) => {
    // console.log(itemObj.languagefilename);
})





