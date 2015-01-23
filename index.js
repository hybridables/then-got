/**
 * then-got <https://github.com/tunnckoCore/then-got>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var got = require('got');
var thenifyAll = require('thenify-all');

module.exports = thenifyAll(got, got);
