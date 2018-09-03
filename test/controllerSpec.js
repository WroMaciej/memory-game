describe('tests for controller', function() {

  beforeAll(function() {
    spyOn(view, 'newLevel');
    spyOn(view, 'refreshStatistics');
    spyOn(model, 'setLevel');
    spyOn(model, 'generateLevel');
  });

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
    var oldLevel = 9,
    expectedNewLevel = 10;
    spyOn(model, 'getLevel').and.returnValue(oldLevel);
    // when
    controller.levelUp();
    // then
    expect(model.generateLevel).toHaveBeenCalled();
    expect(model.setLevel).toHaveBeenCalledWith(expectedNewLevel);
    expect(view.newLevel).toHaveBeenCalled();
  });

  it('should start same level when restart', function() {
    // given
    var oldLevel = 9,
    expectedNewLevel = oldLevel;
    spyOn(model, 'getLevel').and.returnValue(oldLevel);
    spyOn(controller, 'startLevel');
    // when
    controller.restartLevel();
    // then
    expect(controller.startLevel).toHaveBeenCalledWith(expectedNewLevel);
  });


});
