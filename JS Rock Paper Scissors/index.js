//const { use } = require("react");

let weapons = ["Rock","Paper","Scissors"];


let userInput = prompt("Enter a Value:\n0.Rock\n1.Paper\n2.scissors")
for(i=0; i<= weapons.length;i++){

    console.log(weapons[i]);
}
userInput = Number(userInput);
let message = console.log("Player values: " + userInput);
if(userInput >= 3){

    console.log("INCORRECT INPUT")
}else{
let computer =Math.floor(Math.random()*weapons.length) ;
let computerMessage = console.log("Computer Values: " + computer);


//let player = Math.floor(Math.random()* weapons.length)

if(userInput === computer){

    console.log(" IT'S A TIE\nGAME OVER!!!")
}
else if(userInput === 0 && computer === 1){

    console.log("Paper covers Rock\nCOMPUTER WINS!!!")
}
else if(userInput === 1 && computer === 0){

    console.log("Paper covers Rock\nPLAYER WINS!!!")
}
else if(userInput === 1 && computer == 2){

    console.log("Scissors cuts Paper\nCOMPUTER WINS!!!")
}
else if(userInput === 2 && computer == 1){
    console.log("Scissors cuts Paper\nPLAYER WINS!!!")
}
else if(userInput === 0 && computer == 2){
    console.log("Rock stomps Scissors\nPLAYER WINS!!!")
}
else if(userInput === 2 && computer == 0){
    console.log("Rock stomps Scissors\nCOMPUTER WINS!!!")
}
}

