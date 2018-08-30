var controller = (function() {
  var isViewBlocked = false,


    guess = function(event) {
      var element, tile, tileId;
      if (isViewBlocked) {
        return;
      }
      element = event.target;
      tile = document.getElementById(event.target.id);
      tileId = parseInt(tile.id);
      if (model.tilesToGuess.includes(tileId)) {
        tile.className = 'tile correct';
        model.tilesToGuess.splice(model.tilesToGuess.indexOf(tileId), 1);
        if (model.tilesToGuess.length == 0) {
          isViewBlocked = true;
          setTimeout(function() {
            unblockView();
            levelUp();
          }, 1500);
        }
      } else {
        tile.className = 'tile wrong';
        isViewBlocked = true;
        setTimeout(function() {
          restartLevel();
        }, 1500);
      }

    },

    unblockView= function(){
      isViewBlocked = false;
    }


    startLevel = function(newLevel) {
      if (isViewBlocked) {
        return;
      }
      isViewBlocked = true;
      model.setLevel(newLevel);
      model.generateLevel();
      view.newLevel(model.getLevel(), model.tilesTotalNumber(), model.side(), model.getTileTypeById, guess, unblockView);
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
