describe('tests for model', function() {


  it('should return side for given level', function() {
    // given
    var side,
      level = 5;
    model.setLevel(level);
    // when
    side = model.side();
    // then
    expect(side).toBe(6);
  });

  it('should return same level after set', function() {
    // given
    var levelToSet = 10,
      levelToGet;
    // when
    model.setLevel(levelToSet);
    levelToGet = model.getLevel();
    // then
    expect(levelToGet).toBe(levelToSet);
  });

  it('should return same level after set non positive number', function() {
    // given
    var levelCorrect = 3,
    levelZero = 0,
      levelToGet;
    // when
    model.setLevel(levelCorrect);
    model.setLevel(levelZero);
    levelToGet = model.getLevel();
    // then
    expect(levelToGet).toBe(levelCorrect);
  });

  it('should return random tiles to guess after generating new level', function() {
    // given
    var levelToGenerate = 50, //To increase probability that random function return different results
    tilesToGuessNumber = levelToGenerate + 1,
    tilesTotalNumber = tilesToGuessNumber * tilesToGuessNumber,
    tilesToGuess1 = [],
    tilesToGuess2 = [],
    commonTilesToGuess = [];
    // when
    model.setLevel(levelToGenerate);
    model.generateLevel();
    for (var i = 1; i <= tilesTotalNumber; i++){
      if (model.getTileTypeById(i) == "toGuess"){
        tilesToGuess1.push(i);
      }
    }
    model.generateLevel();
    for (var i = 1; i <= tilesTotalNumber; i++){
      if (model.getTileTypeById(i) == "toGuess"){
        tilesToGuess2.push(i);
      }
    }
    // then
    for (var i = 1; i <= tilesTotalNumber; i++){
      if (tilesToGuess1.includes(i) && tilesToGuess2.includes(i)){
        commonTilesToGuess.push(i);
      }
    }
    expect(tilesToGuess1.length).toBe(tilesToGuessNumber);
    expect(tilesToGuess1.length).toBe(tilesToGuess2.length);
    expect(tilesToGuess1.length).toBeGreaterThan(commonTilesToGuess.length);
    expect(tilesToGuess2.length).toBeGreaterThan(commonTilesToGuess.length);
  });



});
