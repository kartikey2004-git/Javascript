const userEmail = []; 

// string as true or truthy value
// empty string as falsy value
// empty array as true value

if (userEmail) {  
  console.log("Got user email");
} 
else {
  console.log("Don't have user email");
}

// falsy values

// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// truthy values
// "0" , 'false' , " " , [] , {} , function(){}


// detect array is empty or not

// if (userEmail.length===0){
//    console.log("array is empty");
// }


// detect object is empty or not
const emptyObj = {}

// array bnke aajata hai keys ka
if (Object.keys(emptyObj).length === 0 ) {
  console.log("object is empty");
} 



// const obj1 = {
//   key1 : "kartik",
//   key2 : 23
// }
// console.log(Object.keys(obj1));


// some statements of general knowledge

// false == 0 (returns true)
// false == ''  (returns true)
// 0 == '' (returns true)


// Nullish Coalescing OPerator (??) : null undefined (basically work as callback function)

let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10 

// ye jo operator hai ye kam krta hai jab pehli value  null  hai  ya undefned hai toh alternate value assign krdeta hai

// val1 = undefined ?? 10

val1 = null ?? 10 ?? 20

console.log(val1);


// Ternary operator 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
