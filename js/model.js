var level = 1;
var tilesCorrect = 0;
var highlightTime = 2;

// var side = level+1;
// var tiles_total = side * side;

var side = function(){
  return level+1;
}

var tilesTotal = function(){
  return side() * side();
}

var tilesToGuess = function(){
  return tilesTotal();
}
