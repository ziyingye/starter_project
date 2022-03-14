let startButton;

const goToGameRule = (event) => {
    
}

/*This is the initializer. It is the start*/
window.addEventListener("DOMContentLoaded", () => {
    //Set DOM values into variables
    startButton = document.getElementById(".button_start");
    startButton.addEventListener("click", goToGameRule);
});