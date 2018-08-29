var view = (function() {


  var viewSize = 800,
  margin = 10,

  tileSize = function(){
    return ( viewSize - ((model.side()+1)*margin)) ) / model.side();
  },

  newLevel = function(){
    document.getElementById("actualLevel").value = model.getLevel();
    document.getElementById("tilesTotal").value = model.tilesToGuess();
  }


  return{
    newLevel : newLevel
  }

})()
