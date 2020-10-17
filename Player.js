class Player{
    constructor(){
     this.index = 0;
     this.distance = 0;
     this.name = "";
    }
    update(){
      this.index++;
      var i = "Players/player"+this.index;
      database.ref(i).set({Name: this.name, Distance: this.distance});
    }
    getCount(){
        var p = database.ref("playerCount");
        p.on("value", (data)=>{
          playerCount = data.val();
        });
    }
    updateCount(count){
       database.ref("/").update({playerCount: count});
    }
    static getPlayerInfo(){
     var k = database.ref("Players");

     k.on("value", (data)=>{
       allPlayers = data.val();
     });

    }
}