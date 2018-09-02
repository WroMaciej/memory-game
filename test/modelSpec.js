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
});
