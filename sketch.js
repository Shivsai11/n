var ball, database, allPlayers, distance = 0;
var position, gameState = 0, playerCount = 0, form, player, game;


function setup(){
  //important
  database = firebase.database();
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("white");
  if(playerCount ===4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
