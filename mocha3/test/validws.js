"use strict"

var request = require('supertest');
var request = request('http://apps.appstiperu.com');

describe('urlgetcontacto', function(){
  describe('GET', function(){
    it('Retorna código 200, si se conecta remotamente', function(done) {
      request.get('/contactos')
      .expect(200, done);
    });
  });
});

describe('POST', function() {
  it('Retorna código 201, si graba un contacto', function(done) {
    var contacto = {
      "names": "Prueba",
      "lastnames": "Prueba",
      "email": "prueba@tsdadasdtdwq.com",
      "fono": "46544645646545646456"
    }

    request.post('/newcontactos')
    .send(contacto)
    .expect(201,done);
  });
});
