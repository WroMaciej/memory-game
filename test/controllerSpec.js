describe('tests for controller', function() {


  it('should set model level after start new given level', function() {
    // given
    var newLevel = 10;
    spyOn(view, 'newLevel').and.callFake(function() {});
    spyOn(view, 'refreshStatistics').and.callFake(function() {});
    spyOn(model, 'setLevel').and.callFake(function() {});
    spyOn(model, 'generateLevel').and.callFake(function() {});

    // when
    controller.startLevel(newLevel);
    // then
    expect(model.generateLevel).toHaveBeenCalled();
    expect(model.setLevel).toHaveBeenCalledWith(newLevel);
    expect(view.newLevel).toHaveBeenCalled();
    //expect(modelSetLevelSpy).toHaveBeenCalled();
  });


});
