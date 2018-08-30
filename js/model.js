var model = (function() {

  var level = 1,
    tilesCorrectNumber = 0,
    highlightTime = 2,
    tilesToGuess = [],




    side = function() {
      return level + 1;
    },

    tilesTotalNumber = function() {
      return side() * side();
    },

    getLevel = function() {
      return level;
    },

    setLevel = function(newLevel) {
      level = newLevel;
    };


  return {
    getLevel: getLevel,
    setLevel: setLevel,
    side: side,
    tilesTotalNumber:tilesTotalNumber
  }


})();
