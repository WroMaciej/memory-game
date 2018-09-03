describe('tests for view', function() {
  var HTMLElements = {};

  beforeAll(function() {
    document.getElementById = jasmine.createSpy('HTML Element').and.callFake(function(ID) {
      if (!HTMLElements[ID]) {
        var fakeElement;
        if (ID == "hits" || ID == "misses" || ID == "totalShots" || ID == "efficiency") {
          fakeElement = document.createElement('span');
        }
        else if (ID == "actualLevel" || ID == "tilesTotal") {
          fakeElement = document.createElement('input');
        }
        else {
          fakeElement = document.createElement('div');
        }
        HTMLElements[ID] = fakeElement;
      }
      return HTMLElements[ID];
    });
  });


  it('should show statistics', function() {
    // given
    var hits = '20',
      misses = '10',
      total = '30',
      efficiency = '67%';
    // when
    view.refreshStatistics(hits, misses);
    // then
    expect(document.getElementById("hits").innerHTML).toBe(hits);
    expect(document.getElementById("misses").innerHTML).toBe(misses);
    expect(document.getElementById("totalShots").innerHTML).toBe(total);
    expect(document.getElementById("efficiency").innerHTML).toBe(efficiency);
  });

  it('should show correct level and correct number of tiles should be shown', function() {
    // given
    var actualLevel = '9',
    totalTiles = '100',
    side = 10,
    tileTypeById = function(id){return "hidden"},
    onClickFunction,
    unblockViewTrigger;
    // when
    view.newLevel(actualLevel, totalTiles, side, tileTypeById, onClickFunction, unblockViewTrigger);
    // then
    expect(document.getElementById("actualLevel").value).toBe(actualLevel);
    expect(document.getElementById("tilesTotal").value).toBe(totalTiles);
    expect(document.getElementById("allTiles").childElementCount).toBe(parseInt(totalTiles));
  });

});
