var view = (function() {


  var viewSize = window.innerWidth,
  margin = 10,

  tileSize = function(){
    return ( viewSize - ((model.side()+1)*margin)) ) / model.side();
  },

  newLevel = function(){
    document.getElementById("actualLevel").value = model.getLevel();
    document.getElementById("tilesTotal").value = model.tilesToGuess();
  },

  showTiles = funtion(){

  };


  return{
    newLevel : newLevel
  }

})()
