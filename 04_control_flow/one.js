// if 
const isUserLoggedIn = true 
const temparature = 41

// condition ka result agar true aayega toh if statement execute hoga wrna nahi hoga

// if ( 2 !== '2'){
//     console.log("executed"); // code execute krega
// }


// if (temparature === 41){
//     console.log("less than 50");
// }
// else{
//     console.log("temparature is greater than 50");
// }
// console.log("executed");


//  < , > , <= , >= , == , != , ===(type bhi check krta hai) , !==


// const score = 200

// if (score > 100 ){
//     let power = "fly"
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");
; // implicit scope within line



// if (balance < 500) {
//    console.log("less than 500"); 
// } 
// else if (balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }


const UserLoggedIn = true 
const debitcard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true
 
if (UserLoggedIn && debitcard && 2 == 2){
    console.log("Allow to buy courses");
}

if (LoggedInFromGoogle || LoggedInFromEmail ){
    console.log("user logged in");
}

// conditional rendering bhi karenge aage jaake react mein
