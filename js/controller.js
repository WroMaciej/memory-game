var controller = (function() {


  var startLevel = function(newLevel) {
    model.setLevel(newLevel);
    view.newLevel();



  },

  restartLevel = function(){
    startLevel(model.getLevel());
  },

  levelUp = function() {
      startLevel(model.getLevel() + 1);
    },

    levelDown = function() {
      if (model.getLevel() > 1){
        startLevel(model.getLevel() - 1);
      }
    },

    guess = function(event) {
      tile = event.target;

    };




  return {
    levelUp: levelUp,
    levelDown: levelDown,
    guess: guess,
    restartLevel: restartLevel,
    startLevel: startLevel


  }




})()
