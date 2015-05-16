# then-got [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> The simplified HTTP(S) requests. Hybrid, Async and Promise API in same time.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i then-got --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var startsWith = require('starts-with')
var assert = require('assert')
var got = require('then-got')

got.get('http://www.tunnckocore.tk', function cb (err, res) {
  if (err) {
    console.error(err)
    return
  }

  var body = res[0]
  var stream = res[1]

  //=> body === '<!DOCTYPE html> ...'
  assert.ok(startsWith(body, '<!DOCTYPE html>'))
  assert.ok(body.length >= 1000)

  console.log('from callback api')
})
.then(function fulfilled (res) {
  var body = res[0]
  var stream = res[1]

  //=> body === '<!DOCTYPE html> ...'
  assert.ok(startsWith(body, '<!DOCTYPE html>'))
  assert.ok(body.length >= 1000)

  console.log('from promise api')
})
.catch(console.error)
```


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/hybridables/then-got/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/then-got
[npmjs-img]: https://img.shields.io/npm/v/then-got.svg?label=then-got

[license-url]: https://github.com/hybridables/then-got/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/hybridables/then-got
[codeclimate-img]: https://img.shields.io/codeclimate/github/hybridables/then-got.svg

[travis-url]: https://travis-ci.org/hybridables/then-got
[travis-img]: https://img.shields.io/travis/hybridables/then-got.svg

[coveralls-url]: https://coveralls.io/r/hybridables/then-got
[coveralls-img]: https://img.shields.io/coveralls/hybridables/then-got.svg

[david-url]: https://david-dm.org/hybridables/then-got
[david-img]: https://img.shields.io/david/hybridables/then-got.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg