# Examples
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
