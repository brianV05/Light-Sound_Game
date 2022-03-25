//Global Variables
var pattern = [2 ,5 ,2 ,1 ,4 ,3]; // track secret pattern of the button presses

var progress = 0;            // how far along the player is in the quessing the pattern
var gamePlaying = false;    // Boolean value that will track wheather the game is currently active
var tonePlaying = false;    // tracks wheather or not there tone playing 
var volume = 0.5;           // must be betweeb 0.0 and 1.0
var guessCounter = 0;       // to keep track of where the user is in the clue sequence

var clueHoldTime = 1000;    //how long to hold each clue's light/sound(WAS A CONST variable.Now used to speed up)
var mistakes = 0;

//global constants
const cluePauseTime = 333;  //how long to pause in between clues
const nextClueWaitTime = 1000;    //how long to wait before starting playback of the clue sequence
const length = 6;

function randomSecretPattern(){
  // generating 8 random numbers in a array
  for (let i = 0; i < length ; i++){
    //use the pattern store these values
    pattern[i] = Math.ceil(Math.random() * 6);
  }
}

//Start and Stop Functions
function startGame(){
  //initialize game variables
  mistakes = 0;
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  randomSecretPattern();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}


// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 587.3,
  6: 740.0
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

//Functions for lighting or clearing a button
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

//Function for the single clue
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

//Function to play a sequence of clues
function playClueSequence(){
  guessCounter = 0;
  //context.resume()             // To speed up 
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime ;
    delay += cluePauseTime;
    
    clueHoldTime = clueHoldTime / 1.05;
  }
}

//Function to call if the user loses the game
function loseGame(){
  stopGame();
  alert("Game over. You lost.");
}

function winGame(){
  stopGame();
  alert("Congratulations! You won.")
}

//Function for checking each guess 
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
     mistakes++;              //increment the count
    //GAME OVER: LOSE!
    if (mistakes == 3){      //if mistakes get to 3 trys
      loseGame();            // stop the game 
      gamePlaying == true;   //reset game to true
    }
    else{
      alert("Wrong! You have: " + (3 - mistakes) + "left.");  // if not, print this message
    }
    
  }

}