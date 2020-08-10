// age in days
function ageindays(){
var birthyear= prompt("what year you were ...good friend");
var ageindays= (2019- birthyear)* 365;

var h1 = document.createElement("h1");
var textAnswer = document.createTextNode("you are " + ageindays +  "days old");
h1.setAttribute("id", "ageindays");
h1.appendChild(textAnswer);
document.getElementById("flexbox-result") .appendChild(h1);
//console.log(ageindays);
}
function reset(){
    document.getElementById("ageindays").remove();
} 