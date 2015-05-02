
var t = function ( name , queue , n ) {

	test( name , function ( ) {

		var array , i , k ;

		array = [ ] ;

		k = 2 ;

		while ( k-- ) {

			ok( queue.empty( ) , k + " > At the begining, queue is empty." ) ;

			for ( i = 0 ; i < n ; ++i ) {

				r = Math.random( ) ;

				queue.push( r ) ;
				array.push( r ) ;

				ok( ! queue.empty( ) , k + " > " + i + " The queue is not empty." ) ;

				deepEqual( queue.peek( ) , array[0] , k + " > " + i + " Peek returns the first value." ) ;

			}

			for ( i = 0 ; i < n ; ++i ) {

				ok( ! queue.empty( ) , k + " > " + i + "The queue is not empty." ) ;

				deepEqual( queue.shift( ) , array.shift( ) , k + " > " + i + " Shift works." ) ;

			}

			ok( queue.empty( ) , k + " > At the end, queue is empty." ) ;

		}

	} ) ;

} ;

var n = 2500 ;

t( "NodeQueue" , new fifo.NodeQueue( ) , n ) ;
t( "DllQueue" , new fifo.DllQueue( ) , n ) ;
t( "IfQueue" , new fifo.IfQueue( ) , n ) ;
