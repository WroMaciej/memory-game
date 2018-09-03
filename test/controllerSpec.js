describe('tests for controller', function() {


  it('should set model level after start new given level', function() {
    // given
    var newLevel = 10;
    //model = createSpy().and.callFake(model);
    //view = createSpy().and.callFake(view);
    //view = createSpy('viewSpy', view).and.callFake();
    //modelSpy = jasmine.createSpyObj('model',['setLevel', 'generateLevel']),
    //view = jasmine.createSpyObj('view', ['newLevel','refreshStatistics']);
  //  view = spyOn(window, ['newLevel','refreshStatistics']);
  //spyOn(window, 'view.newLevel');
  //spyOn(view, 'newLevel').and.callFake(function(){});
    //spyOn(view, 'refreshStatistics').and.callFake(function(){});
  //view = jasmine.createSpy().and.callFake(function(){});
//viewSpy = {};


  //view = jasmine.createSpy('view',  ['newLevel','refreshStatistics']);
  //model = jasmine.createSpyObj('view',  ['newLevel','refreshStatistics']);
  spyOn(view, 'newLevel').and.callFake(function(){});
  spyOn(view, 'refreshStatistics').and.callFake(function(){return true;});
  spyOn(model, 'setLevel').and.callFake(function(){});
  spyOn(model, 'generateLevel').and.callFake(function(){});

  // spyOn(view, 'newLevel').and.callThrough();
  // spyOn(view, 'refreshStatistics').and.callThrough();
  // spyOn(model, 'setLevel').and.callThrough();
  // spyOn(model, 'generateLevel').and.callThrough();


  //view.newLevel.and.callFake(function(){});
  //view.refreshStatistics.and.callFake(function(){});
  //view.and.callFake(function(){});
    //view.newLevel.and.callFake(function(){});
    //view.refreshStatistics.and.callFake(function(){});
      // modelSetLevelSpy = spyOn(model, 'setLevel'),
      // modelGenerateLevelSpy = spyOn(model, 'generateLevel'),
       //viewNewLevelSpy = spyOn(view, 'newLevel').and.returnValue(null),
       //viewStatisticsSpy = spyOn(view, 'refreshStatistics').and.returnValue(null);
    // when
    controller.startLevel(newLevel);
    // then
    expect(view.newLevel).toHaveBeenCalled();
    //expect(modelSetLevelSpy).toHaveBeenCalled();
  });







});
