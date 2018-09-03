var view = (function() {


  var viewSize = window.innerWidth / 3,
    marginPercentage = 10,
    borderRadiusPercentage = 5,
    hightlightTime = 3,


    singleMarginPx = function(side) {
      return (viewSize * (marginPercentage / 100)) / (2 * side);
    },

    borderRadiusPx = function(side) {
      return tileSize(side) * (borderRadiusPercentage / 100);
    },

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
      div.style.borderRadius = borderRadiusPx(side) + "px";
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

    newLevel = function(actualLevel, totalTiles, side, tileTypeById, onClickFunction, unblockViewTrigger) {
      document.getElementById("actualLevel").value = new Number(actualLevel);
      document.getElementById("tilesTotal").value = new Number(totalTiles);
      generateTiles(true, totalTiles, side, tileTypeById, onClickFunction);
      setTimeout(function() {
        generateTiles(false, totalTiles, side, tileTypeById, onClickFunction);
        unblockViewTrigger();
      }, hightlightTime * 1000);

    },

    refreshStatistics = function(hits, misses){
      var efficiency, total;
       total = parseInt(parseInt(hits)+parseInt(misses));
        document.getElementById("hits").innerHTML = hits;
        document.getElementById("misses").innerHTML = misses;
        document.getElementById("totalShots").innerHTML = total;
        if (total > 0 ){
          efficiency = Math.round(((hits / total) * 100));
        }
        else{
          efficiency = 0;
        }
        document.getElementById("efficiency").innerHTML = efficiency + "%";
    };

  return {
    newLevel: newLevel,
    tileSize: tileSize,
    refreshStatistics: refreshStatistics
  }

})()
