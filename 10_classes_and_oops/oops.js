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

const user2 = {
  username: "kartik",
  loginCount: 8,
  signedIn: true,

  getUserDetails : function(){
    // console.log("got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this); // current context
  }
}
// constructor functions