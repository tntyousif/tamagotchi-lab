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
    boredom: "0",
    hunger : "0",
    sleepinss : "0"
};

//st2
const boredomState = document.getElementById('boredom-stat');
const hungerState = document.getElementById('hunger-stat');
const sleepinessState = document.getElementById('sleepiness-stat');

console.log(boredomState);
console.log(hungerState);
console.log(sleepinessState);

const playButten = document.getElementById('play');
const feedButten = document.getElementById('feed');
const sleepButten = document.getElementById('sleep');

console.log(playButten);
console.log(feedButten);
console.log(sleepButten);

const gameMessageEl = document.getElementById('message');

console.log(gameMessageEl);

const resetBtnEl = document.getElementById('restart');

console.log(resetBtnEl);

/*---------------------------- Variables (state) ----------------------------*/

let timer;
let gameOver;

/*------------------------ Cached Element References ------------------------*/




/*-------------------------------- Functions --------------------------------*/

function init() {
    console.log('init is called');
    gameOver = false;
    timer = setInterval(runGame, 2000);

    render();
}

function runGame() {
    console.log('The game is running!');
}

render();

function render() {}

function updateStates() {
    state.boredom += getRandomIncrement();
    state.hunger += getRandomIncrement();
    state.sleepiness += getRandomIncrement();
}
/*----------------------------- Event Listeners -----------------------------*/



