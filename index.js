
var randomNo1 =  Math.floor(Math.random()*6)+1;


var randomDice1 = "dice" +randomNo1 + ".png";
var randomImage1 = "images/" +randomDice1;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImage1);

var randomNo2 =  Math.floor(Math.random()*6)+1;


var randomDice2 = "dice" +randomNo2 + ".png";
var randomImage2 = "images/" +randomDice2;
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomImage2);

if(randomDice1>randomDice2){
   document.querySelector("h1").innerHTML = "player1 Wins" ;
}
else if (randomDice1<randomDice2){
    document.querySelector("h1").innerHTML= "player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="LOL";
}
