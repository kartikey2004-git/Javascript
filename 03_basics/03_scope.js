var c = 300;

// scope in js // if ke  jo bhi andar hai wo block scope hai
let a = 300
if (true) {
  let a = 10;
  const b = 20;
  console.log("INNER :",a)
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];   
}


console.log(a);
console.log(b);
console.log(c);

// global scope ki priority jyada hoti hai program mein , but scope mein local var ki jyada hoti hai priority 

// console mein jo scope check krte hai wo alag hai
// through node environment scope alag hota hai


//+++++++++++++++++++++++++++++++++++++++++++++

function one(){
    const userName = "kartik"

    function two(){
        const website = "youtube"
        // console.log(userName)
    }
    console.log(website)

     two()
}
one()

// function jitni baar bhi declare krte hai ya call krte unke ke liye alag se ek call stack bnta hai(alag scope bnta hai)


if(true){
    const userName = "hitesh"
    if (userName === "hitesh"){
        const website = "youtube"
        console.log(userName + website);
    }
    // console.log(website)
}

// console.log(username)


// ++++++++++++++++++++++ interesting +++++++++++

console.log(addONe(5))
function addONe(num){
    return num + 1
}


// concept of hoisting ka basic principle
// declaration se pehle use nhi kr skte hai function call ko 
addTwo(5)
const addTwo = function(num){
    return num + 2
}
