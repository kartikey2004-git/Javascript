const user = {
  username: "kartik",
  loginCount: 8,
  signedIn: true,

  getUserDetails : function(){
    // console.log("got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this); // current context
  }
}
console.log(this); // return {} in global context in terminal

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

  return(this); // implicitly return define hota hi hai
}

const userOne = new User("kartik",8,true)
const userTwo = new User("kartikey",12,false) // ye value overwrite krdi saari ki saari

console.log(userOne)
console.log(userTwo)

