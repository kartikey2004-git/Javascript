// input ke andar se value event ke through nikalti hai
// form jab bhi submit hota hai ya toh POST method se ya toh GET method se hota hai
//lekin jab bhi submit hota hai toh uski value server ya url ko chali jati hai

const form = document.querySelector('form');

// const height = parseInt(document.querySelector('#height').value)
// this usecase will give an empty value

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (isNaN(height) || height <= 0 || height === '') {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (isNaN(weight) || weight <= 0 || weight === '') {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;

    // show a popup text on behalf of your BMI

    if(bmi<18.6){
      result.innerHTML=`<span>Under weigth :${bmi}</span>`;
      }else if(bmi>18.6 && bmi<24.9){
          result.textContent=`Normal Weight:${bmi}`;
      }else{
          result.textContent=`Over Weight : ${bmi}`
      }
  }
});


