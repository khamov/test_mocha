var assert = require('assert');
var obj = { a: 1, b: 2};


describe('Simple test', function() {
    it('test one', function() {
      assert.equal( obj.a, 1);
    });
});
