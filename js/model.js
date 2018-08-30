var model = (function() {

  var level = 1,
    tilesCorrectNumber = 0,
    tilesToGuess = [],
    tilesGuessed = [],




    side = function() {
      return level + 1;
    },

    totalTilesToGuessNumber = function() {
      return side();
    },

    tilesTotalNumber = function() {
      return side() * side();
    },

    getLevel = function() {
      return level;
    },

    setLevel = function(newLevel) {
      level = newLevel;
    },
    getTileTypeById = function(tileId) {
      if (tilesToGuess.includes(tileId)) {
        return "toGuess";
      }
      return "hidden";
    },

    generateLevel = function() {
      tilesToGuess.length = 0;
      tilesGuessed.length = 0;
      while (tilesToGuess.length < totalTilesToGuessNumber()) {
        var randomId = Math.floor(Math.random() * (tilesTotalNumber()) )+1;
        if (!tilesToGuess.includes(randomId)) {
          tilesToGuess.push(randomId);
        }
      }
    };


  return {
    getLevel: getLevel,
    setLevel: setLevel,
    side: side,
    tilesTotalNumber: tilesTotalNumber,
    getTileTypeById: getTileTypeById,
    generateLevel: generateLevel,
    tilesToGuess: tilesToGuess
  }


})();
