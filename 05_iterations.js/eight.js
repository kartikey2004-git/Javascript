// for understanding of reduce

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

// console.log(sumWithInitial);
// Expected output: 10


const myNum = [1,2,3]

// const myTotal = myNum.reduce(function (acc,curVal) {
//     console.log(`acc: ${acc} and curVal: ${curVal}`)
//     return acc + curVal
// } , 0)

const myTotal = myNum.reduce((acc,curVal) => acc+curVal,0)
// console.log(myTotal);

const shoppingCart = [
  {
    itemName : "jscourse",
    price: 2999
  },
  {
    itemName : "python course",
    price: 999
  },  
  {
    itemName : "mobile dev course",
    price: 12999
  },
  {
    itemName : "data science course",
    price: 32999
  },
]

const priceTopay = shoppingCart.reduce( (acc , item) => acc + item.price , 0)
console.log(priceTopay)

