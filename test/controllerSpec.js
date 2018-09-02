describe('tests for controller', function() {


  it('should set model level after start new given level', function() {
    // given
    var newLevel = 10,
      modelSpy = spyOn(model, 'setLevel'),
      controllerSpy = spyOn(view, 'newLevel');
    // when
    controller.startLevel(newLevel);
    // then
    expect(modelSpy).toHaveBeenCalled();
  });







});
