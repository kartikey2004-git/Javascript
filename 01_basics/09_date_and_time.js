// https://tc39.es/proposal-temporal/docs/index.html
//here is the documentation
// for use in future there is proposal for date object in js

//Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());

// console.log(typeof myDate);
// month zero se st hote hai js ke andar


// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());


// let myCreatedDate = new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-29")
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("01-14-2004");
// // console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// // convert into seconds 
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());


// string interpolation
// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long",
    // timeZone: ''
})