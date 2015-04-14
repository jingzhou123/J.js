module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['mocha', 'expect'],
    files: [
      'J.js',
      'test/test.js'
    ]
  });
};
