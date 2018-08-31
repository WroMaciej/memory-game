var model = (function() {

  var level = 1,
    misses = 0,
    hits = 0,
    tilesToGuess = [],

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
      while (tilesToGuess.length < totalTilesToGuessNumber()) {
        var randomId = Math.floor(Math.random() * (tilesTotalNumber())) + 1;
        if (!tilesToGuess.includes(randomId)) {
          tilesToGuess.push(randomId);
        }
      }
    },

    getHits = function() {
      return hits;
    },

    getMisses = function() {
      return misses;
    },

    isHit = function(tileId) {
      if (tilesToGuess.includes(tileId)) {
        return true;
      } else {
        return false;
      }
    },

    isAllGuessed = function(){
      return tilesToGuess.length == 0;
    },

    acceptHit = function(tileId){
        hits = hits + 1;
        tilesToGuess.splice(tilesToGuess.indexOf(parseInt(tileId)), 1);
    };

    rejectHit = function(){
      misses = misses + 1;
    }


  return {
    getLevel: getLevel,
    setLevel: setLevel,
    side: side,
    tilesTotalNumber: tilesTotalNumber,
    getTileTypeById: getTileTypeById,
    generateLevel: generateLevel,
    getMisses: getMisses,
    getHits: getHits,
    isHit: isHit,
    acceptHit: acceptHit,
    rejectHit: rejectHit,
    isAllGuessed: isAllGuessed
  }


})();
