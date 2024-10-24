// Javascipt execution context(file ko js run ya execute kaise kregi) 

// Global execution context of browser  (this ) window object return krti hai

// js is single threaded

// function execution context
// eval execution context


// {} ---> 1. memory creation phase
//   ----> 2. execution phase


let val1 = 10
let val2 = 3
function addNum (num1 , num2 ){
    let total = num1 + num2
    return total 
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)

// function ka new executional context
// parent executional context mein return hojata hai(but bolte hai usko gobal execution context mein return krdete hai)

