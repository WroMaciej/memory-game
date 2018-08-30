var view = (function() {


  var viewSize = window.innerWidth / 3,
    marginPercentage = 10,
    hightlightTime = 4,


  singleMarginPx = function(side) {
    return (viewSize * (marginPercentage / 100)) / (2 * side);
  }



  tileSize = function(side) {
      return (viewSize / side) - 2 * singleMarginPx(side);
    },

    addTile = function(tileId, isHighlighting, tileType, side) {
      var parent = document.getElementById("allTiles");
      var div = document.createElement("DIV");
      div.className = 'tile';
      if (isHighlighting == true) {
        div.classList.add(tileType);
      } else {
        div.classList.add('hidden');
      }
      div.style.margin = singleMarginPx(side) + "px";
      div.id = tileId;
      div.style.width = tileSize(side) + "px";
      div.style.height = tileSize(side) + "px";
      parent.style.width = viewSize + "px";
      parent.style.height = viewSize + "px";
      parent.appendChild(div);
    },

    generateTiles = function(isHighlighting, totalTiles, side, tileTypeById) {
      var parent = document.getElementById("allTiles").textContent = '';
      for (var i = 1; i <= totalTiles; i++) {
        addTile(i, isHighlighting, tileTypeById(i), side);
      }

    },

    newLevel = function(actualLevel, totalTiles, side, tileTypeById) {
      document.getElementById("actualLevel").value = new Number(actualLevel);
      document.getElementById("tilesTotal").value = new Number(totalTiles);
      generateTiles(true, totalTiles, side, tileTypeById);
      setTimeout(function(){
        generateTiles(false, totalTiles, side, tileTypeById);}
        , hightlightTime*1000);
    };

  return {
    newLevel: newLevel,
    tileSize: tileSize
  }

})()
