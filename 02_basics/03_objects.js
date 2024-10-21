// objects and events seekhne padenge bss js ko master krne ke liye
// object do tarike se declare ho skta hai
// 1.  as a literal
// 2. as a constructor(singleton)
// object.create

// symbol ko as a key kaise use krte hai

// object literals

const mySym = Symbol("key1");


const jsUser = {
    name : "kartik",
    "full name" : "kartikey bhatnagar",
    [mySym] : "key1",
    age: 19,
    Location : "jaipur",
    email: "kartikeybhatngar247@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["monday","wednesday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]); // because behind in the memory object keys stored as a string
// console.log(jsUser[mySym]);
// console.log(typeof(jsUser.mySym)); // string return krega 


jsUser.email = "kartikgoogle.com"
// Object.freeze(jsUser)
jsUser.email = "kartikchatgpt.com"
// console.log(jsUser);

// function treated as a type 1 citizen ( no discrimination function treated as variable)

jsUser.greeting = function(){
    console.log("hello js user")
}
// console.log(jsUser.greeting);// return function anonymous(func not executed sirf function ka reference aya hai)
// console.log(jsUser.greeting());


// object ko refrence krna hai toh $(this.)
jsUser.greetingTWo = function(){
    console.log(`hello js user, ${this.name}`)
}
console.log(jsUser.greetingTWo());

