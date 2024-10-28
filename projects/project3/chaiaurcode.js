const clock = document.querySelector('#clock');
// document.getElementById('clock')

// let date = new Date();
// console.log(date.toLocaleTimeString());

// aisa koi method jo har time run ho and main usko control kr skta hu
// cron-job laga skte hai wo server ke upar pahuch gye kya hum

// ek sec baad ke liye 1000
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
