let gameResult;

let spacemanButton;
let vairemontButton;
let ghobliButton;

let userChoice;
let computerChoice;

let gamesPlayed = 0;
let gamesTied = 0;
let gamesWon = 0;
let gameLost = 0;

const makeChoice = (event) => {
    userChoice = event.target.value;
    
    setTimeout(getResult , 1000);
}

const choices = ["Spaceman X", "Vairemont", "Ghobli"];

const getResult = () => {
    gamesPlayed++;

    computerChoice = rand(0, 2);

    let resultString = 
        "<div>You chose " + choices[userChoice] + "</div>" +
        "<div>The computer chose " + choices[computerChoice] + "</div>" +
        compareChoice(userChoice, computerChoice) + "<br>" +
        "<div>You've won " + gamesWon + " out of " + gamesPlayed + " games</div>";

    gameResult.innerHTML = resultString;
}

const compareChoice = (userChoice, computerChoice) => {
    if(userChoice == computerChoice){
        gamesTied++;
        return "<div>It's a Tie</div>";
    } else 
    if(userChoice == 0 && computerChoice == 2 ||
        userChoice == 1 && computerChoice == 0 ||
        userChoice == 2 && computerChoice == 1){
        gamesWon++;
        return "<div>You win!</div>";
    }else
    if(userChoice == 0 && computerChoice == 1 ||
        userChoice == 1 && computerChoice == 2 ||
        userChoice == 2 && computerChoice == 0){
        gameLost++;
        return "<div>You lose!</div>";
    }
}

const imgComputer = () =>{

}

const rand = (min, max) => {
    return Math.round(Math.random() * (max-min) + min );
}

/*This is the initializer. It is the start */
window.addEventListener("DOMContentLoaded", () => {

    //set DOM values into variables.
    gameResult = document.querySelector(".game_result");

    spacemanButton = document.querySelector("#spaceman_player");
    vairemontButton = document.querySelector("#vairemont_player");
    ghobliButton = document.querySelector("#ghobli_player");

    spacemanButton.addEventListener("click", makeChoice);
    vairemontButton.addEventListener("click", makeChoice);
    ghobliButton.addEventListener("click", makeChoice);

    img = document.querySelector('#image_player');
    btn1 = document.querySelector('#spaceman_player');
    btn2 = document.querySelector('#vairemont_player');
    btn3 = document.querySelector('#ghobli_player');

    btn1.addEventListener('click', () =>{
        img.src = 'images/spaceman_win.png';
    })
    
    btn2.addEventListener('click', () =>{
        img.src = 'images/vairemont_win.png';
    })
    
    btn3.addEventListener('click', () =>{
        img.src = 'images/ghobli_win.png';
    })

    img_computer = document.querySelector('#image_computer');
    btn4 = document.querySelector('#spaceman_computer');
    btn5 = document.querySelector('#vairemont_computer');
    btn6 = document.querySelector('#ghobli_computer');

    
});