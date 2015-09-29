/*!
 * native-promise <https://github.com/tunnckoCore/native-promise>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var semver = require('semver')
var isPromise = require('is-promise')
var NativePromise = require('./index')

test('should be native Promise on node >= v0.11.13', function (done) {
  if (!semver.lt(process.version, '0.11.13')) {
    test.ok(NativePromise)
    var promise = NativePromise.resolve(123)
    test.strictEqual(isPromise(promise), true)
  }
  done()
})

test('should be `false` if dont have support, node < v0.11.13', function (done) {
  if (semver.lt(process.version, '0.11.13')) {
    test.strictEqual(NativePromise, false)
  }
  done()
})
