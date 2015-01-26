## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Simplified and promisified HTTP/HTTPS requests (`sindresorhus/got`).  
**[Hybrid][hybridify], Async and Promise API.**

## Install
```bash
npm install then-got
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var startsWith = require('starts-with');
var assert = require('assert');
var got = require('then-got');

got.get('http://www.tunnckocore.tk', function(err, res) {
  // as usual

  if (err) {
    console.error(err);
    return;
  }

  console.log('from callback api')
  

  var body = res[0];
  var stream = res[1];

  //=> body === <!DOCTYPE html> ...

  assert.ok(startsWith(body, '<!DOCTYPE html>'));
  assert.ok(body.length >= 1000);
})
.then(function fulfilled(res) {
  var body = res[0];
  var stream = res[1];

  //=> body === <!DOCTYPE html> ...
  
  assert.ok(startsWith(body, '<!DOCTYPE html>'));
  assert.ok(body.length >= 1000);

  console.log('from promise api')
})
.catch(console.error);
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014-2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/then-got
[npmjs-img]: https://img.shields.io/npm/v/then-got.svg?style=flat&label=then-got

[coveralls-url]: https://coveralls.io/r/hybridables/then-got?branch=master
[coveralls-img]: https://img.shields.io/coveralls/hybridables/then-got.svg?style=flat

[license-url]: https://github.com/hybridables/then-got/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/hybridables/then-got
[travis-img]: https://img.shields.io/travis/hybridables/then-got.svg?style=flat

[daviddm-url]: https://david-dm.org/hybridables/then-got
[daviddm-img]: https://img.shields.io/david/hybridables/then-got.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/hybridables/then-got/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), January 24, 2015_

[hybridify]: https://github.com/hybridables/hybridify