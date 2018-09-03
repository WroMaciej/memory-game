// describe('tests for view', function() {
//
//   beforeAll(function() {
//     spyOn(view, 'newLevel');
//     spyOn(view, 'refreshStatistics');
//     setLevelSpy = spyOn(model, 'setLevel');
//     spyOn(model, 'generateLevel');
//     getLevelSpy = spyOn(model, 'getLevel').and.returnValue(10);
//   });
//
//   it('should set model level after start new given level', function() {
//     // given
//     var newLevel = 10;
//     // when
//     controller.startLevel(newLevel);
//     // then
//     expect(model.generateLevel).toHaveBeenCalled();
//     expect(model.setLevel).toHaveBeenCalledWith(newLevel);
//     expect(view.newLevel).toHaveBeenCalled();
//   });
//
//   it('should start next level when level up', function() {
//     // given
//     var expectedNewLevel = 11;
//     // when
//     controller.levelUp();
//     // then
//     expect(model.generateLevel).toHaveBeenCalled();
//     expect(model.setLevel).toHaveBeenCalledWith(expectedNewLevel);
//     expect(view.newLevel).toHaveBeenCalled();
//   });
//
//   it('should start same level when restart', function() {
//     // given
//     var expectedNewLevel = 10;
//     // when
//     controller.restartLevel();
//     // then
//     expect(model.setLevel).toHaveBeenCalledWith(expectedNewLevel);
//   });
//
//
//
//
// });