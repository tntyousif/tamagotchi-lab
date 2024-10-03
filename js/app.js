// 1) Define the required variables used to track the state of the game.

// 2) Store cached element references.

// 3) Upon loading, the game state should be initialized, and a function should 
//    be called to render this game state.

// 4) The state of the game should be rendered to the user.

// 5) Handle the game over logic. 

// 6) Handle each instance of a player clicking a button with the use of a 
//    `handleClick()` function.

// 7) Create reset functionality.


/*-------------------------------- Constants --------------------------------*/
const state = {
    boredom: 0,
    hunger : 0,
    sleepinss : 0,
};



/*---------------------------- Variables (state) ----------------------------*/

let timer;
let gameOver;

/*------------------------ Cached Element References ------------------------*/

const boredomState = document.getElementById('boredom-stat');
const hungerState = document.getElementById('hunger-stat');
const sleepinessState = document.getElementById('sleepiness-stat');

const playButton = document.getElementById('play');
const feedButton = document.getElementById('feed');
const sleepButton = document.getElementById('sleep');

const gameMessageEl = document.getElementById('message');
const resetBtnEl = document.getElementById('restart');


/*-------------------------------- Functions --------------------------------*/

function init() {
    console.log('init is called');
    gameOver = false;
    resetBtnEl.classList.add('hidden');
    gameMessageEl.classList.add('hidden');
    state.boredom = 0;
    state.hunger = 0;
    state.sleepinss = 0;

    timer = setInterval(runGame, 2000);
    render();
}

function runGame() {
   updateStates();
   cheakGameOver();
   render();
}


function render() {
    boredomState.textContent = state.boredom;
    hungerState.textContent = state.hunger;
    sleepinessState.textContent = state.sleepinss;

    if (gameOver) {
        timer.clearInterval();
    }
    
}

function updateStates() {
    state.boredom += Math.floor(Math.random()*4);
    state.hunger += Math.floor(Math.random()*4);
    state.sleepinss += Math.floor(Math.random()*4);
}

function cheakGameOver() {
    if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10) {
        gameOver = true;
    }
}

function playBtnClick () {
    state.boredom = 0;
    render();
}

function feedBtnClick () {
    state.hunger = 0;
    render();
}

function sleepBtnClick () {
    state.sleepinss = 0;
    render();
}
/*----------------------------- Event Listeners -----------------------------*/

init();
playButton.addEventListener('click', playBtnClick);
feedButton.addEventListener('click', feedBtnClick);
sleepButton.addEventListener('click', sleepBtnClick);
resetBtnEl.addEventListener('click', init)

