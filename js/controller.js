var controller = (function() {
  var startLevel = function(newLevel){
    model.setLevel(newLevel);



  }



  levelUp = function() {
     startLevel(model.getLevel + 1);
    },

    levelDown = function() {
     startLevel(model.getLevel - 1);
    };

  return {
    levelUp: levelUp,
    levelDown: levelDown

  }




})()
