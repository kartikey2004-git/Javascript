let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// ye function check krega ki function mein jo guess value pass ki gyi hai wo 1 and 100 ke beech mein hai ya nhi ya phir actual mein value hai ya nhi hai

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

//ye function kya krega agar guess ==  random number ke toh bol dega ki aap jeet gye ho game and high or low batayega

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

//values ko clean krega box se kyuki next value bhi input krani hai , guess array , guess remaining ko bhi update krega

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `; 
  // push krta ja rha hai previous guess jo hai usme guess ki value ko
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}


// low or high ka msg display krdega

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// The disabled attribute is a boolean attribute.
// When present, it specifies that the element should be disabled.
// A disabled element is unusable.
// but attribute key value pair mein set hote hai

function endGame (){
  userInput.value = ''
  userInput.setAttribute ('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id = "NewGame"> Start New Game </h2>`;
  startOver.appendChild(p)
  playGame = false ;
  newGame()
}


function newGame(){
  const newGameButton = document.querySelector('#NewGame')
  newGameButton.addEventListener('click',function(e){
    // e.defaultPrevented()
     randomNumber  = parseInt(Math.random() * 100 + 1)
     prevGuess = []
     numGuess = 1
     guessSlot.innerHTML = ''
     remaining.innerHTML = `${11 - numGuess} `;
     userInput.removeAttribute('disabled')
     startOver.remove(p)

    playGame = true
  })
}

