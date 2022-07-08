window.addEventListener("load",bindEvents);
var buttons;
var gameOver = false;
function bindEvents(){
    buttons = document.querySelectorAll("button");
    for(let button of buttons){
        button.addEventListener('click',isXorZero);
    }
    document.getElementById("input").addEventListener('click',clikonpage);
}
function clikonpage(){
    document.getElementById("input").style.backgroundColor="red";
}
var xorzero = false;
function isXorZero(){
    if(gameOver == false && this.innerText.trim().length==0){
        this.innerText = xorzero?'X':'O';
        isGameOver();
        xorzero = !xorzero;
    }
}
function isGameOver(){
    if(this.buttons[0].innerText==this.buttons[1].innerText && this.buttons[0].innerText==this.buttons[2].innerText){
        console.log(this.buttons[0].innerText+" Wins");
        document.getElementById("input").value  =this.buttons[0].innerText+" Wins";
        return true;
    }
}
