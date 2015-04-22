
var t = function ( name , queue , n ) {

	test( name , function ( ) {

		var array , i ;

		array = [ ] ;

		ok( queue.empty( ) , "At the begining, queue is empty." ) ;

		for ( i = 0 ; i < n ; ++i ) {

			r = Math.random( ) ;

			queue.push( r ) ;
			array.push( r ) ;

			ok( ! queue.empty( ) , i + "The queue is not empty." ) ;

			deepEqual( queue.peek( ) , array[0] , i + " Peek returns the first value." ) ;

		}

		for ( i = 0 ; i < n ; ++i ) {

			ok( ! queue.empty( ) , i + "The queue is not empty." ) ;

			deepEqual( queue.shift( ) , array.shift( ) , i + " Shift works." ) ;

		}

		ok( queue.empty( ) , "At the end, queue is empty." ) ;

	} ) ;

} ;

var n = 2500 ;

t( "NodeQueue" , new fifo.NodeQueue( ) , n ) ;
