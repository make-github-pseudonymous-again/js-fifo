[js-fifo](http://aureooms.github.io/js-fifo)
==

_**F**irst **I**n, **F**irst **O**ut_ data structures code bricks for JavaScript.

[![NPM license](http://img.shields.io/npm/l/aureooms-js-fifo.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-fifo/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-fifo.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-fifo)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-fifo.svg?style=flat)](http://bower.io/search/?q=aureooms-js-fifo)
[![Build Status](http://img.shields.io/travis/aureooms/js-fifo.svg?style=flat)](https://travis-ci.org/aureooms/js-fifo)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-fifo.svg?style=flat)](https://coveralls.io/r/aureooms/js-fifo)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-fifo.svg?style=flat)](https://david-dm.org/aureooms/js-fifo#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-fifo.svg?style=flat)](https://david-dm.org/aureooms/js-fifo#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-fifo.svg?style=flat)](https://codeclimate.com/github/aureooms/js-fifo)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-fifo.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-fifo)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-fifo.svg?style=flat)](https://github.com/aureooms/js-fifo/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-fifo.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-fifo)

##Installation

Can be managed through [duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower), or
[npm](https://github.com/npm/npm).

```js
let fifo = require( "aureooms-js-fifo" ) ;
```

##Usage

All data structures implemented in this package follow the following interface,

```js
let queue = new fifo. ... ( ... ) ;

queue.empty( ) ; // returns true if queue is empty, false otherwise
queue.peek( ) ; // returns the value stored at the beginning of the queue*
queue.push( value ) ; // pushes a value at the end of the queue^
queue.shift( ) ; // removes and returns the value at the beginning of the queue*

//*Calls to the two methods #peek and #shift are valid only if calling #empty
// would return false.  Nothing is done to prevent misuse of these two methods,
// i.e. these errors must be prevented and handled by the caller.

//^Specific conditions can apply for specific implementations.
```

Below are some examples illustrating usage of the data structures implemented
in this package,

```js
// Queue implementation based on a list of nodes.
let queue = new fifo.NodeQueue( ) ;

queue.empty( ) ; // true
queue.push( 18 ) ;
queue.empty( ) ; // false
queue.peek( ) ; // 18
queue.push( 3 ) ;
queue.peek( ) ; // 18
queue.shift( ) ; // 18
queue.shift( ) ; // 3
queue.empty( ) ; // true
```
