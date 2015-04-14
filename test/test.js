describe('isFunction', function(){
  it('should check plain object', function(){
    expect(J.isFunction({})).to.not.be.ok();
  });
});
describe('each', function() {
  it('should iterate own keys of an object', function() {
    var obj = {
      a: 1,
      b: 2
    };
    J.each(obj, function(value, key){
      return obj[key] = value * 2;
    });
    expect(obj.a).to.be.equal(2);
    expect(obj.b).to.be.equal(4);
  })
})
