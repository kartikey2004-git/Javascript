// Stack(Primitive) , Heap(Non-Primitive) Memory 

let myYoutubeName = "kartikey"

let anotherName = myYoutubeName
anotherName = "chai aur code"

// example of change in copied values
console.log(myYoutubeName);
console.log(anotherName);


// example of heap memory with help of reference to the original memory
let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne;

userTwo.email = "kartik@google.com"

console.log(userOne.email)
console.log(userTwo.email)
