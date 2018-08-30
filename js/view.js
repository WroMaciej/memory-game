var view = (function() {


  var viewSize = window.innerWidth,
    margin = 10,

    tileSize = function() {
      return (viewSize - ((model.side() + 1) * margin)) / model.side();
    },

    showTiles = function() {

    },

    newLevel = function() {
      document.getElementById("actualLevel").value = new Number(model.getLevel());
      document.getElementById("tilesTotal").value = new Number(model.tilesTotalNumber());
    };
    
  return {
    newLevel: newLevel
  }

})()
