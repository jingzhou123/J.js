describe('noop', function(){
  it('should check plain object', function(){
    J.isFunction({}).should.be.False;
  });
})
