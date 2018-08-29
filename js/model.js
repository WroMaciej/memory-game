var model = (function() {

  var level = 1,
  tilesCorrect = 0,
  highlightTime = 2,

  side = function() {
    return level + 1;
  },

  tilesTotal = function() {
    return side() * side();
  },

  getLevel = function(){
    return level;
  },

  tilesToGuess = function() {
    return tilesTotal();
  };
  return {
    getLevel : getLevel,
    side : side,
    tilesToGuess : tilesToGuess
  }


})();
