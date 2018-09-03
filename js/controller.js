var controller = (function() {
  var isViewBlocked = false,
    blockTime = 1.5,


    correctHit = function(tile) {
      tile.className = 'tile correct';
      model.acceptHit(tile.id);
      if (model.isAllGuessed()) {
        blockView();
        setTimeout(function() {
          unblockView();
          levelUp();
        }, blockTime * 1000);
      }
    },

    wrongHit = function(tile) {
      tile.className = 'tile wrong';
      model.rejectHit();
      blockView();
      setTimeout(function() {
        unblockView();
        restartLevel();
      }, blockTime * 1000);
    },

    refreshStatistics = function(){
      view.refreshStatistics(model.getHits(), model.getMisses());
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
      refreshStatistics();

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
      refreshStatistics();
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

})();
