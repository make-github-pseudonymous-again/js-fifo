The code needs a ES2015+ polyfill to work, for example
[babel-polyfill](https://babeljs.io/docs/usage/polyfill).
```js
require( 'babel-polyfill' ) ;
// or
import 'babel-polyfill' ;
```

Then
```js
const fifo = require( 'aureooms-js-fifo' ) ;
// or
import fifo from 'aureooms-js-fifo' ;
```
