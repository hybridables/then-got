/*!
 * then-got <https://github.com/hybridables/then-got>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict'

var test = require('assertit')
var thenGot = require('./index')

test('then-got:', function () {
  test('should have `.hybridify` method as all hybrids', function (done) {
    var hybrid = thenGot('http://todomvc.com')

    test.equal(typeof thenGot.hybridify, 'function')
    test.equal(typeof hybrid.hybridify, 'function')
    done()
  })
  test('should handle optional `options`', function (done) {
    thenGot('http://todomvc.com')
    .then(function fulfilled (res) {
      var body = res[0]

      test.equal(body[0], '<')
      test.ok(body.length >= 100)
      done()
    })
  })
  test('should have got`s methods', function (done) {
    thenGot.get('http://todomvc.com')
    .then(function fulfilled (res) {
      var body = res[0]

      test.equal(body[0], '<')
      test.ok(body.length >= 100)
      done()
    })
  })
  test('should handle errors correctly with promise api', function (done) {
    thenGot('http://todomvc.co534jh53k4j5m')
    .catch(function rejected (err) {
      test.ifError(!err)
      done()
    })
  })
  test('should handle errors correctly with callback api', function (done) {
    thenGot('http://todomvc.co534jh53k4j5m', function _callback_ (err) {
      test.ifError(!err)
      done()
    })
  })
})
