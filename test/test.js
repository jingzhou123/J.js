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
    var log = [];
    J.each(obj, function(value, key){
      log.push(key + ":" + value);
    });
    expect(log[0]).to.be.equal("a:1");
    expect(log[1]).to.be.equal("b:2");
  });
  it("should iterate an array", function() {
    var arr = [1, 2];
    var log = [];
    J.each(arr, function(value, index) {
      log.push(index + ":" + value);
    });
    expect(log[0]).to.be.equal("0:1");
    expect(log[1]).to.be.equal("1:2");
  })
})
