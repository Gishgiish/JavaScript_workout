// How to accept user input

// can be done in 2 ways:
// 1. window prompt

let username;

username = window.prompt("What's your username?");

console.log(username);


// 2. HTML text box --> profesional way

/* create text box in the HTML file with the <Input> and the ID 'Text'
   add a button 'submit' with 'Submit' as the ID
*/

let usersName;
document.getElementById("submit").onclick = function(){
    usersName = document.getElementById("Text").value;


}

