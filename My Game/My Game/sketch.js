var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var obstacles;
var obs;
var obstacleGroup;
var obstacle1_img, obstacle2_img
var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/1.png");
  car2_img = loadImage("images/2.png");
  car3_img = loadImage("images/3.png");
  car4_img = loadImage("images/4.png");
  obstacle1_img = loadImage("images/monster1.png");
  //obstacle2_img = loadImage("images/road.png")
  ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  xVel = 0
  yVel = 0
  gameState = 0
  distance = 0
  finishedPlayers = 0
  game = new Game();
  game.getState();
  game.start();
  obs = createGroup();
  for(i = 0;i<5;i++){
    w = random(200,950)
    h = random(-height*4,height-300)
      obstacles = createSprite(w,h);
      obstacles.addImage("eye",obstacle1_img);
  obs.add(obstacles);    
  }

}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}

