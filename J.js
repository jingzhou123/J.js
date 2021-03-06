var J = {
  noop: function() {},
  isFunction: function(f) {
    return f && Object.prototype.toString.call(f) === "[object Function]";
  },
  each: function(objOrArr, iterator) {
    if (objOrArr && typeof objOrArr.length == 'number') {
      for (var i = 0, l = objOrArr.length; i < l; i ++) {
        iterator(objOrArr[i], i);
      }  
    } else {
      if(!this.isFunction(iterator)) return;
      var keys = Object.keys(objOrArr);
      for (var i = 0, l = keys.length; i < l; i ++) {
        iterator(objOrArr[keys[i]], keys[i]);
      }
    }  
  },
  object: function(list, values) {
    var obj = {};
    for (var i = 0, l = list.length; i < l; i ++) {
      obj[list[i]] = ((values[i] !== undefined) ? values[i] : undefined);
    }
    return obj;
  },
  strstr: function(long, short) {
    return String.prototype.indexOf.call(long, short) !== -1;
  }
}
