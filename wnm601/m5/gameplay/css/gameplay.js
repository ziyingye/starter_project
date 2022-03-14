let gameResult;

let spacemanButton;
let vairemontButton;
let ghobliButton;

let userChoice;

const makeChoice = (event) => {
    userChoice = event.target.value;
    console.log(userChoice);
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
});