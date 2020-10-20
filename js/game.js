class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }

      car1=createSprite(100,200,100,100);
      car2=createSprite(300,200,100,100);
      car3=createSprite(500,200,100,100);
      car4=createSprite(700,200,100,100);

      car1.addImage(car1Img);

      car2.addImage(car2Img);

      car3.addImage(car3Img);

      car4.addImage(car4Img);


      cars=[car1,car2,car3,car4];
    }
  
    play(){
      form.hide();
     // textSize(30);
     // text("Game Start", 120, 100)
      Player.getPlayerInfo();
  
      if(allPlayers !== undefined){
     //   var display_position = 130;
    
    background(ground);

    image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
    
     var index=0;
     var x=220;
        var y=0;


        for(var plr in allPlayers){
//add 1 to the index for every loop

index=index+1;
x=x+220;
y=displayHeight-allPlayers[plr].distance;

cars[index-1].x=x;

cars[index-1].y=y;


          if (index === player.index)
          {

            stroke(10);
            fill("purple");

            ellipse(x,y,60,60);

            cars[index-1].shapeColor="blue"
            camera.position.x=displayWidth/2;

          camera.position.y=cars[index-1].y;
          }
         
         
           
  
         /* display_position+=20;
          textSize(15);
          text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)*/
        }
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=50
        player.update();
      }


       
      if(player.distance>4300){

        gameState=2;
      
      }

      
      drawSprites();



}


end (){

  textSize(30);
  textFont("Algerian")
  fill("green");
  text("You Win",displayWidth/2-50,displayHeight/2);

}
 
  }
