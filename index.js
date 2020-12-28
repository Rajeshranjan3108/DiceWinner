// first image change
var randomNumber1= Math.floor(Math.random() * 6) + 1;
var ranImg="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",ranImg);
// document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");


// second image change
var randomNumber2=Math.floor(Math.random()*6)+1;
var ranImg2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", ranImg2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player1 wins";
}
else if (randomNumber1===randomNumber2) {
  document.querySelector("h1").innerHTML="Draw";
}
else{
  document.querySelector("h1").innerHTML="Player2 wins";
}
