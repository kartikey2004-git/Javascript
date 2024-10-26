const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNumbers.map((num) => num + 10 )
// console.log(newNum);
// map function khud return krdeta hai

const newNum = myNumbers
              .map((num) => num * 10) 
              // isme jo array return krega map uske items array ke wo pass honge to next map
              .map((num) => num +1)
              .filter((num) => num >=40)
               // filter based on conditional game or hud se return nhi krta 
console.log(newNum);



