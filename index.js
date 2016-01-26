/*!
 * then-got <https://github.com/hybridables/then-got>
 *
 * Copyright (c) 2014-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

/**
 * Promisify basically every method of `simple-get`
 * and main exported function `simpleGet`. So it is
 * absolutely the same as `simple-get` instead
 * everything returns Promise
 *
 * @api private
 */
module.exports = require('relike-all')(require('simple-get'))
