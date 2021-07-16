class Game {
  constructor(){

  }

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

    car1 = createSprite(100,1000);
    car1.addImage("car1",car1_img);
    car1.debug = true
    car1.scale = 0.08
    car2 = createSprite(300,1000);
    car2.debug = true
    car2.addImage("car2",car2_img);
    car2.scale = 0.09
    car3 = createSprite(500,1000);
    car3.debug = true
    car3.addImage("car3",car3_img);
    car3.scale = 0.08
    car4 = createSprite(700,1000);
    car4.addImage("car4",car4_img);
    car4.debug = true
    car4.scale = 0.08
    cars = [car1, car2, car3, car4];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
          if(cars[index-1].isTouching(obstacles)){
            yVel-=0.9
          }
        }
       
        
      }

    }

    if(keyDown("W") && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(keyDown("S") && player.index !== null){
      player.distance -=10
      player.update();
    }

  
    






    
    if(player.distance > 3860){
      gameState = 2;
      player.rank +=1
      Player.updateCarsAtEnd(player.rank)
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }
}