var view = (function() {


  var viewSize = window.innerWidth / 3,
    marginPercentage = 10,
    hightlightTime = 3,


  singleMarginPx = function(side) {
    return (viewSize * (marginPercentage / 100)) / (2 * side);
  }



  tileSize = function(side) {
      return (viewSize / side) - 2 * singleMarginPx(side);
    },

    addTile = function(tileId, isHighlighting, tileType, side, onClickFunction) {
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
      div.onclick = onClickFunction;
      parent.style.width = viewSize + "px";
      parent.style.height = viewSize + "px";
      parent.appendChild(div);
    },

    generateTiles = function(isHighlighting, totalTiles, side, tileTypeById, onClickFunction) {
      var parent = document.getElementById("allTiles").textContent = '';
      for (var i = 1; i <= totalTiles; i++) {
        addTile(i, isHighlighting, tileTypeById(i), side, onClickFunction);
      }

    },

    newLevel = function(actualLevel, totalTiles, side, tileTypeById, onClickFunction) {
      document.getElementById("actualLevel").value = new Number(actualLevel);
      document.getElementById("tilesTotal").value = new Number(totalTiles);
      generateTiles(true, totalTiles, side, tileTypeById, onClickFunction);
      setTimeout(function(){
        generateTiles(false, totalTiles, side, tileTypeById, onClickFunction);}
        , hightlightTime*1000);
    };

  return {
    newLevel: newLevel,
    tileSize: tileSize
  }

})()
