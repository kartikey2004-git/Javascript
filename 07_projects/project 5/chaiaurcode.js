// generate a random color

const randomColor = function (){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0 ; i < 6;i++){
     color += hex[Math.floor(Math.random()*16)]
    }
    return color
  }
  // console.log(randomColor())
  
  
  let interValId ;
  const startChangingColor = function(){
   if(!interValId){
     interValId = setInterval(changeBgColor,1000)
   }
    function changeBgColor(){
      document.body.style.backgroundColor = randomColor()
    }
  } 
  
  const stopChangingColor = function (){
    clearInterval(interValId);
    interValId = null ;
  }
  
  document.querySelector('#start').addEventListener('click',startChangingColor)
  
  document.querySelector('#stop').addEventListener('click',stopChangingColor)
  
  // but lekin humare code mein interVal id hai usko rewrite kr rhe hai baar baar
  
  
  // interValId ko null krne se wo clear toh kr hi diya hai and uski jo value hai usko dereference krdiya hai
  
  
  // agar koi variable mein reference ka use nhi aa rha toh usko null krdo taaki thodi memory free hojaye 
  
  // humein actual mein check krna padega ki value kaise hai aur kya hai
  
  // kyuki jaise hi value null hojati hai , tab humein yeh setInterval chalana ,detect krna padega , 
  
  // kyuki null ko hum aise hi reference nhi le skte hai kyuki intervalId ke andar kuch bhi nhi,aur null ki jagah aap value dal rhe ho , toh uska ek process hota hai , saftey check hota hai usko lagana chahiye