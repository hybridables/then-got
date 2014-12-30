/**
 * then-got <https://github.com/tunnckoCore/then-got>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var got = require('./index');

describe('then-got:', function() {
  it('should handle optional `options`', function(done) {
    got('http://todomvc.com')
    .then(function fulfilled(values) {
      var body = values[0];
      var stream = values[1];

      assert.ok(body[0], '<');
      assert.ok(body.length >= 100);
      done();
    });
  });

  it('should can define method', function(done) {
    got.get('http://todomvc.com')
    .then(function fulfilled(values) {
      var body = values[0];
      var stream = values[1];

      assert.ok(body[0], '<');
      assert.ok(body.length >= 100);
      done();
    });
  });

  it('should handle errors correctly', function(done) {
    got('http://todomvc.co534jh53k4j5m')
    .catch(function rejected(err) {
      assert.ok(err)
      done();
    });
  });
});
