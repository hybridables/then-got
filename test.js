/*!
 * then-got <https://github.com/hybridables/then-got>
 *
 * Copyright (c) 2014-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var thenGot = require('./index')
var isPromise = require('is-promise')
var isStream = require('is-node-stream')

test('should thenGot be function and have .get, .post, .concat methods', function (done) {
  console.log('TRAVIS=', process.env.TRAVIS)
  test.strictEqual(typeof thenGot, 'function')
  test.strictEqual(typeof thenGot.get, 'function')
  test.strictEqual(typeof thenGot.post, 'function')
  test.strictEqual(typeof thenGot.concat, 'function')
  done()
})

test('should thenGot(url) return promise', function (done) {
  var promise = thenGot('http://ipecho.net')
  test.strictEqual(isPromise(promise), true)
  done()
})

test('should thenGot.concat(url) return promise and get data', function (done) {
  var promise = thenGot.concat('http://ipecho.net')

  promise.then(function (res) {
    var data = res[0].toString()
    var stream = res[1]

    test.strictEqual(isPromise(promise), true)
    test.strictEqual(isStream(stream), true)
    test.strictEqual(data.indexOf('<title>') !== -1, true)
    done()
  }, done)
})
