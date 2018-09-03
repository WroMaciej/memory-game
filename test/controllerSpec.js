describe('tests for controller', function() {


  it('should set model level after start new given level', function() {
    // given
    var newLevel = 10;
    spyOn(view, 'newLevel');
    spyOn(view, 'refreshStatistics');
    spyOn(model, 'setLevel');
    spyOn(model, 'generateLevel');

    // when
    controller.startLevel(newLevel);
    // then
    expect(model.generateLevel).toHaveBeenCalled();
    expect(model.setLevel).toHaveBeenCalledWith(newLevel);
    expect(view.newLevel).toHaveBeenCalled();
    //expect(modelSetLevelSpy).toHaveBeenCalled();
  });


});
