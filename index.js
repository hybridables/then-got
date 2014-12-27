/**
 * then-got <https://github.com/tunnckoCore/then-got>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var got = require('got');
var Deferred = require('native-or-another');

module.exports = thenGot;

function thenGot(url, opts) {
  var defer = new Deferred();
  opts = opts || {};
  var gotify = opts.method ? got[opts.method.toLowerCase()] : got;

  gotify(url, opts, function gotCallback(err, res) {
    if (err) {
      return defer.reject(err);
    }
    return defer.resolve(res);
  });

  return defer.promise;
}

Object.keys(got).forEach(function(method) {
  thenGot[method] = function(url, opts) {
    return thenGot(url, opts);
  };
});
