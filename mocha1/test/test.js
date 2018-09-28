var assert = require('assert');

describe('Operaciones', function(){
  var a,b;

  beforeEach(function(){
    a = 4;
    b = 2;
  });

  describe('funciones', function() {
    it('suma', function () {
      assert.equal(a+b,6);
    });

    it('resta', function () {
      assert.equal(a-b,4);
    });


  });
});
