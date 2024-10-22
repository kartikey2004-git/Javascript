// Rest operator 

function calculateCartPrice (val1 , val2 ,...num1){
   return num1
}
// console.log(calculateCartPrice(200,400,500,560,864)) // returns array

const user = {
    username : "hitesh",
    price : 199
}

// kyuki function ko nhi pta hota hai ki kya aane wala hai user ya phir kuch string ya kuch api response aane wala


function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username :  "sam",
    price : 399
})


const myNewArr = [200,400,100,600]

function returnIndexValue(getArray){
    return getArray[2]
}

// console.log(returnIndexValue(myNewArr))
console.log(returnIndexValue([300,700,7890]))

