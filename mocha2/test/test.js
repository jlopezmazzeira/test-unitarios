var assert = require('assert');
var operaciones = require('../js/utilitario');

describe('Calculadora',function (){
  it('Sumar', function() {
    assert.equal(5, operaciones.sumarNumeros(2,3));
    assert.equal(11, operaciones.sumarNumeros(8,3));
  });

  it('Restar', function() {
    assert.equal(1, operaciones.restarNumeros(3,2));
    assert.equal(5, operaciones.restarNumeros(8,3));
  });

  it('multiplicar', function() {
    assert.equal(6, operaciones.multiplicarNumeros(2,3));
    assert.equal(24, operaciones.multiplicarNumeros(8,3));
  });

  it('Dividir', function() {
    assert.equal(2, operaciones.dividirNumeros(6,3));
    assert.equal(4, operaciones.dividirNumeros(8,2));
  });
});
