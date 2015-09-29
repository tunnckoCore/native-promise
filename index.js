/*!
 * native-promise <https://github.com/tunnckoCore/native-promise>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

try {
  module.exports = global.Promise || Promise
} catch (err) {
  module.exports = false
}
