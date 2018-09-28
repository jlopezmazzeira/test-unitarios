Mocha se puede instalar de 2 formas, solo para dev o global:
  1. npm install --global mocha
  2. npm install --save-dev mocha

Para realizar test de webservices necesitamos instalar supertest de la siguiente forma:
  npm install --save-dev supertest

Para realizar tareas programadas, necesitamos instalar el siguiente paquete:
  npm install node-schedule

Exportar la librería assert
  var assert = require('assert');

la función describe() se le pasan 2 paramétros, el primer parámetro es el nombre y el 2do
la función de callback que contendrá las funciones a ejecutar.

la función beforeEach() es donde se declararán las variables globales a usar.

La función it() nos permite declarar funciones y realizar pruebas,  se le pasan 2 paramétros, el primer parámetro es el nombre
y el 2do la función de callback que queremos ejecutar.

Para ejecutar las pruebas, ejecutamos el siguiente comando:
  1. ./node_modules/mocha/bin/mocha

Crear servidores web con Hapi y Joi

Debemos instalar hapi y joi de la siguiente forma:
  npm install hapi --save
  npm install joi --save

Para dar respuestas con páginas debemos instalar el modulo inert
  npm install inert --save
