var J = {
  noop: function() {},
  isFunction: function(f) {
    return f && Object.prototype.toString.call(f) === "[object Function]";
  }
}
