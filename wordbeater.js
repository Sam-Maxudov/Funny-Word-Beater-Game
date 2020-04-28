window.addEventListener('load', init);

// Available levels
const levels = {
    easy:5,
    medium:3,
    easy:2
}

//To change level
const currentLevel = levels.medium;

// We're gonna use LET because we want it to change later, if we use const - it wil not
let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];

  // Initialize Game

  function init(){

    //Show number of seconds in UI
      seconds.innerHTML = currentLevel;
      // Load word from array
      showWord(words);

      // Start matching word on word input
      wordInput.addEventListener('input', startMatch);
      // Call countdown
      setInterval(countDown, 1000)

      // check game status
      setInterval(checkStatus, 50);
  }

  // Start match
  function startMatch(){
      if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1; //u need to put a time one above it bacause of reload time
        showWord(words);
        wordInput.value = '';
        score++;
      }

      if(score === -1){
        scoreDisplay.innerHTML = 0;
      } else{
        scoreDisplay.innerHTML = score;
      }
      
  }

  // Match the current word to word input
  function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!'
        return true;
    } else{
        message.innerHTML = '';
        return false;
    }
  }


  // pick and show a random word
  function showWord(words) {
      // Generate a random word from array
      const randIndex = Math.floor(Math.random() * words.length);
      
      //Output a random word
      currentWord.innerHTML = words[randIndex];
}


// Countdown timer
function countDown(){
    // Make sure that time is not run out
    if(time > 0){
        // Decrement time
        time--;
    } else if(time === 0){
        // Game is over
        isPlaying = false;
    }

    //Showtime
    timeDisplay.innerHTML = time;
}

//Check game status
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}