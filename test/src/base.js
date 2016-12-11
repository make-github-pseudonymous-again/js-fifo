import test from 'ava' ;

import {
	NodeQueue ,
	DllQueue ,
	IfQueue ,
} from '../../src' ;

function macro ( t , queue , n ) {

	const array = [ ] ;

	let k = 2 ;

	while ( k-- ) {

		t.true( queue.empty( ) , k + " > At the begining, queue is empty." ) ;

		for ( let i = 0 ; i < n ; ++i ) {

			const r = Math.random( ) ;

			queue.push( r ) ;
			array.push( r ) ;

			t.true( ! queue.empty( ) , k + " > " + i + " The queue is not empty." ) ;

			t.deepEqual( queue.peek( ) , array[0] , k + " > " + i + " Peek returns the first value." ) ;

		}

		for ( let i = 0 ; i < n ; ++i ) {

			t.true( ! queue.empty( ) , k + " > " + i + "The queue is not empty." ) ;

			t.deepEqual( queue.shift( ) , array.shift( ) , k + " > " + i + " Shift works." ) ;

		}

		t.true( queue.empty( ) , k + " > At the end, queue is empty." ) ;

	}

}

const n = 2500 ;

test( "NodeQueue" , macro , new NodeQueue( ) , n ) ;
test( "DllQueue" , macro , new DllQueue( ) , n ) ;
test( "IfQueue" , macro , new IfQueue( ) , n ) ;
