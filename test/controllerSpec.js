describe('tests for controller', function() {

  beforeAll(function() {
    spyOn(view, 'newLevel');
    spyOn(view, 'refreshStatistics');
    spyOn(model, 'setLevel');
    spyOn(model, 'generateLevel');
    spyOn(model, 'getLevel').and.returnValue(10);
  });

  afterEach(function(){
    controller.unblockView();
  })

  it('should set model level after start new given level', function() {
    // given
    var newLevel = 10;
    // when
    controller.startLevel(newLevel);
    // then
    expect(model.generateLevel).toHaveBeenCalled();
    expect(model.setLevel).toHaveBeenCalledWith(newLevel);
    expect(view.newLevel).toHaveBeenCalled();
  });

  it('should start next level when level up', function() {
    // given
    var expectedNewLevel = 11;
    // when
    controller.levelUp();
    // then
    expect(model.generateLevel).toHaveBeenCalled();
    expect(model.setLevel).toHaveBeenCalledWith(expectedNewLevel);
    //expect(model.setLevel.calls.mostRecent().args[0]).toBe(expectedNewLevel);
    expect(view.newLevel).toHaveBeenCalled();
  });

  it('should start same level when restart', function() {
    // given
    var expectedNewLevel = 10;
    // when
    controller.restartLevel();
    // then
    expect(model.setLevel).toHaveBeenCalledWith(expectedNewLevel);
  });




});
