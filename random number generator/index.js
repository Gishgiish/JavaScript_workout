// Random number generator

const myButton = documen.getElementById("myButtton");
const myLabel = documen.getElementById("myLabel");
const min = 1;
const max = 6;

let randomNum 

myButton.onClick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textcontent = randomNum;
}