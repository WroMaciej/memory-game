var view = (function() {


  var viewSize = window.innerWidth / 3,
    marginPercentage = 10,
    hightlightTime = 4,


  singleMarginPx = function() {
    return (viewSize * (marginPercentage / 100)) / (2 * model.side());
  }



  tileSize = function() {
      return (viewSize / model.side()) - 2 * singleMarginPx();
    },

    addTile = function(tileId, isHighlighting) {
      var parent = document.getElementById("allTiles");
      var div = document.createElement("DIV");
      div.className = 'tile';
      if (isHighlighting == true) {
        div.classList.add(model.getTileTypeById(tileId));
      } else {
        div.classList.add('hidden');
      }
      div.style.margin = singleMarginPx() + "px";
      div.id = tileId;
      div.style.width = tileSize() + "px";
      div.style.height = tileSize() + "px";
      parent.style.width = viewSize + "px";
      parent.style.height = viewSize + "px";
      parent.appendChild(div);
    },

    generateTiles = function(isHighlighting) {
      var parent = document.getElementById("allTiles").textContent = '';
      for (var i = 1; i <= model.tilesTotalNumber(); i++) {
        addTile(i, isHighlighting);
      }

    },

    newLevel = function() {
      document.getElementById("actualLevel").value = new Number(model.getLevel());
      document.getElementById("tilesTotal").value = new Number(model.tilesTotalNumber());
      generateTiles(true);
      setTimeout(function(){
        generateTiles(false);}
        , hightlightTime*1000);
    };

  return {
    newLevel: newLevel,
    tileSize: tileSize
  }

})()
