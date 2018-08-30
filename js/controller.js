var controller = (function() {


  var guess = function(event) {
    var element, tile, tileId;
    element = event.target;
    tile = document.getElementById(event.target.id);
    tileId = parseInt(tile.id);
    if (model.tilesToGuess.includes(tileId)){
      tile.className = 'tile correct';
      model.tilesToGuess.splice(model.tilesToGuess.indexOf(tileId), 1);
      if (model.tilesToGuess.length == 0){
        setTimeout(function(){
          levelUp();}
          , 1500);
      }
    }
    else{
      tile.className = 'tile wrong';
      setTimeout(function(){
        restartLevel();}
        , 1500);
    }

  },


  startLevel = function(newLevel) {
      model.setLevel(newLevel);
      model.generateLevel();
      view.newLevel(model.getLevel(), model.tilesTotalNumber(), model.side(), model.getTileTypeById, guess);
    },

    restartLevel = function() {
      startLevel(model.getLevel());
    },

    levelUp = function() {
      startLevel(model.getLevel() + 1);
    },

    levelDown = function() {
      if (model.getLevel() > 1) {
        startLevel(model.getLevel() - 1);
      }
    };






  return {
    levelUp: levelUp,
    levelDown: levelDown,
    guess: guess,
    restartLevel: restartLevel,
    startLevel: startLevel


  }




})()
