var controller = (function() {


  var startLevel = function(newLevel) {
    model.setLevel(newLevel);
    view.newLevel();



  },

  restartLevel = funtion(){
    startLevel(model.getLevel);
  },

  levelUp = function() {
      startLevel(model.getLevel + 1);
    },

    levelDown = function() {
      startLevel(model.getLevel - 1);
    },

    guess = funtion(event) {
      tile = event.target;

    },




  return {
    levelUp: levelUp,
    levelDown: levelDown,
    guess: guess,
    restartLevel: restartLevel,
    startLevel: startLevel


  }




})()
