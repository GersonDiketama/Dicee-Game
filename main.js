let randomNumber1 = Math.floor(Math.random()*6)+1;

let player = "dice" +randomNumber1+ ".png";


let randonSource1 = "images/"+player;

let image1  = document.querySelectorAll('img')[0];

image1.setAttribute('src',randonSource1);



let randomNumber2 = Math.floor(Math.random()*6)+1;

let player2 = "dice" +randomNumber2+ ".png";


let randonSource2 = "images/"+player2;

let image2  = document.querySelectorAll('img')[1];

image2.setAttribute('src',randonSource2);



if(randomNumber1>randomNumber2)
{
    document.querySelector('.winner1').innerHTML="You are the winner";
}

else if(randomNumber2>randomNumber1)
{
    document.querySelector('.winner2').innerHTML = 'You are the winner';
}

else
{
    document.querySelector('.dra').innerHTML = "EVEN";
}