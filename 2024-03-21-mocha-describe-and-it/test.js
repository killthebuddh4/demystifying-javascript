describe('Tests', function() {
  it('Good test', function() {
    return true
  });

  it('Bad test', function() {
    throw new Error('Bad test');
  });
});