const user = {
  username: "kartik",
  loginCount: 8,
  signedIn: true,

  getUserDetails : function(){
    // console.log("got user details from database");
    // console.log(`Username: ${this.username}`);
    // console.log(this); // current context
  }
}
// console.log(this); // return {} in global context in terminal

// console.log(this); // in console of web browser , it returns an window object

// console.log(user.username);
// console.log(user.getUserDetails());

// for current context this keyword is used

// const user2 = {
//   username: "kartik",
//   loginCount: 8,
//   signedIn: true,

//   getUserDetails : function(){
//     // console.log("got user details from database");
//     // console.log(`Username: ${this.username}`);
//     console.log(this); // current context
//   }
// }



// constructor functions (new) keyword ki importance
// allows  us to create multiple instances fromsingle object literal

// const promiseOne = new Promise()

function User(username,loginCount,isLoggedIn){
  this.username = username; // current context 
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;


  this.greeting = function(){
    console.log(`Welcome ${this.username} `)
  }

  return(this); // implicitly return define hota hi hai
}

const userOne = new User("kartik",8,true)
const userTwo = new User("kartikey",12,false) // ye value overwrite krdi saari ki saari
// 

console.log(userOne.constructor); // returns [function:user] // reference hoti hai aapke khud hi ke baare mein

// console.log(userTwo);


// new keyword ko use krna to create new instances
// Step 1 : sabse pehle ek empty object create hota hai(usko instance bola jata hai)

// Step 2: phir ek constructor function call hota hai new keyword ki wajah se hota hai
// (and jitne bhi arguments wagera hai unko pass  krta deta hai )

// Step 3: jitne bhi arguments wagerah hote wo this ke andar inject hojate hai

// Step 4: aapko function ke andar miljate hai





// instancesof ek operator hota hai 



// // function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }
// const auto = new Car('Honda', 'Accord', 1998);

// console.log(auto instanceof Car);
// // Expected output: true

// console.log(auto instanceof Object);
// // Expected output: true

// ye do term padhne brief mein
// abstraction
// encapsalation
