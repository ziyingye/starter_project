for(let i = 0; i < 100+1; i++){
    
    if(i == 0){
        console.log(0);
    } else if( i % 7 == 0){
        console.log("Fizz");
    } else if( i % 11 == 0){
        console.log("Buzz");
    } else{
        console.log(i);
    }
}

function changeColor(){
    document.querySelector(".title").style.color = "#f23555"
}