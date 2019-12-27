

var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;


var concat1="images/dice"+randomNumber1+".png";
document.querySelector("img").setAttribute("src",concat1);


var concat2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",concat2);


if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML="🏁Player 1 wins";
}
else if (randomNumber1 < randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 2 wins🏁";
}
else
{
  document.querySelector("h1").innerHTML="Its a draw";
}
