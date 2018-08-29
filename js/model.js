var model = (function() {

  var level = 1,
  tilesCorrect = 0,
  highlightTime = 2;

  var side = function() {
    return level + 1;
  }

  var tilesTotal = function() {
    return side() * side();
  }

  var tilesToGuess = function() {
    return tilesTotal();
  }


})();
