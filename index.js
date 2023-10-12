var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImg1 = "dice" + randomNumber1 + ".png"
var randomImg1Src = "images/" + randomImg1;

var image1 = document.getElementsByClassName("img1")[0];

image1.setAttribute("src", randomImg1Src);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImg2 = "dice" + randomNumber2 + ".png"
var randomImg2Src = "images/" + randomImg2;

var image2 = document.getElementsByClassName("img2")[0];

image2.setAttribute("src", randomImg2Src);




if(randomNumber1 > randomNumber2){
    //Player 1 Won
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    //Player 2 Won
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{//draw match
    document.querySelector("h1").innerHTML = "Draw!";
}