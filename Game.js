class Game{
    constructor(){
                                            
    }

   getState(){
    var s = database.ref("gameState");
    s.on("value", function (data){
        gameState = data.val();
    });
   }   

   update(state){
       database.ref("/").update({
           gameState:state
       });   
   }
   
   async start(){
       if(gameState === 0){
            player = new Player();
            var q = await database.ref("playerCount").once("value");
            if(q.exists()){
                playerCount = q.val();
                player.getCount();
            }
            form = new Form();
            form.display();
       }
   }
   play(){
     form.hide();
     textSize(20);
     textFont("Georgia");
     text("Game start", 120, 100);
     Player.getPlayerInfo();

     if(allPlayers!==undefined){
        var e = 130;
        for(var plr in allPlayers){
          if(plr === "player"+player.index){
            fill("red");
          }
          else{
            fill("black");
          }
          e =  e + 20;
          textSize(20);
          textFont("Georgia");
          text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, e);
        }
     }
     if(keyIsDown("up")&& player.index!==null){
       player.distance = player.distance + 50;
       player.update();
     }
   }
}