const coding = ["js","ruby","java","python","java"]

// coding.forEach( function (val) {
//    console.log(val); 
// })


// coding.forEach((item) => {
//     console.log(item);
// }) 


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) 
// yaha par function ka reference dena hai


// coding.forEach((item,index,arr) => {
//     console.log(item);
//     console.log(index);
//     console.log(arr)
// })

// array ke andar ke objects taken as items of an array
const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
]

myCoding.forEach((item)=> {
    console.log(item.languageName);
})
