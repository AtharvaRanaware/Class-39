var ball;
var database,playerCount;

var gameState=0;
var form,player,game;

var allPlayers;
var car1,car2,car3,car4;
var cars;
var car1Img,car2Img,car3Img,car4Img;

var track,ground;


function preload (){

car1Img=loadImage("car1.png");

car2Img=loadImage("car2.png");

car3Img=loadImage("car3.png");

car4Img=loadImage("car4.png");

track=loadImage("track.jpg");

ground=loadImage("ground.png");

}



function setup(){
   database=firebase.database();

    createCanvas(displayWidth-20,displayHeight-30);
 






game=new Game();

game.getState();

game.start();

}

function draw(){
    


    if(playerCount===4){

        game.update(1);


    }

    if(gameState===1){

clear();
game.play();

    }


    if(gameState===2){


       // game.update(2);
        
        game.end();
    }
    fill ("red");
    text(mouseX+","+mouseY,mouseX,mouseY);
  
}



