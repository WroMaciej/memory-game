describe('tests for controller', function() {


  it('should set model level after start new given level', function() {
    // given
    var newLevel = 10,
    //model = createSpy().and.callFake(model);
    //view = createSpy().and.callFake(view);
    view = createSpy('viewSpy', view).and.callThrough();
    //modelSpy = jasmine.createSpyObj('model',['setLevel', 'generateLevel']),
    //viewSpy = jasmine.createSpyObj('view', ['newLevel','refreshStatistics']);
      // modelSetLevelSpy = spyOn(model, 'setLevel'),
      // modelGenerateLevelSpy = spyOn(model, 'generateLevel'),
       //viewNewLevelSpy = spyOn(view, 'newLevel').and.returnValue(null),
       //viewStatisticsSpy = spyOn(view, 'refreshStatistics').and.returnValue(null);
    // when
    controller.startLevel(newLevel);
    // then
    expect(modelSpy.setLevel()).toHaveBeenCalled();
    //expect(modelSetLevelSpy).toHaveBeenCalled();
  });







});
