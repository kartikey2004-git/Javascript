function sayMyName(){
    console.log("k");
    console.log("a");
    console.log("r");
    console.log("t");
    console.log("i");
    console.log("k");
}

// sayMyName()  // execution of function
// without () hota hai reference

// function addTwoNumbers(num1,num2){
//    console.log(num1 + num2)
// }


function addTwoNumbers(num1,num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
 }

const result = addTwoNumbers(4,5) // without arguments ye return naN
// console.log("result : " , result);

// function logInUserMessage(userName){
//     if(userName === undefined){
//        console.log("Please enter a username")
//        return 
//     }
//    return `${userName} just logged in`
// }

// console.log(logInUserMessage("kartik"))
// console.log(logInUserMessage()) 
// undefined just logged in output ayega




function logInUserMessage(userName = "sam"){
    if(!userName){
       console.log("Please enter a username")
       return 
    }
   return `${userName} just logged in`
}

console.log(logInUserMessage()) 

