var controller = (function() {
  var isViewBlocked = false,

    correctHit = function(tile) {
      tile.className = 'tile correct';
      model.acceptHit(tile.id);
      if (model.isAllGuessed()) {
        blockView();
        setTimeout(function() {
          unblockView();
          levelUp();
        }, 1500);
      }
    },

    wrongHit = function(tile) {
      tile.className = 'tile wrong';
      blockView();
      setTimeout(function() {
        unblockView();
        restartLevel();
      }, 1500);
    },

    guess = function(event) {
      var element, tile, tileId;
      if (isViewBlocked) {
        return;
      }
      element = event.target;
      tile = document.getElementById(event.target.id);
      tileId = parseInt(tile.id);
      if (model.isHit(tileId)) {
        correctHit(tile);
      } else {
        wrongHit(tile);
      }

    },

    blockView = function() {
      isViewBlocked = true;
    },

    unblockView = function() {
      isViewBlocked = false;
    },


    startLevel = function(newLevel) {
      if (isViewBlocked) {
        return;
      }
      blockView();
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
