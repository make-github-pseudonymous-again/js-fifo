import Node from './Node' ;

/**
 * IfQueue#peek only valid if IfQueue#empty is false.
 * IfQueue#shift only valid if IfQueue#empty is false.
 */

export default function IfQueue ( ) {

	this.front = null ;
	this.back = null ;

}

IfQueue.prototype.empty = function ( ) {

	return this.front === null ;

} ;

/**
 * Only valid if IfQueue#empty is false.
 */

IfQueue.prototype.peek = function ( ) {

	return this.front.value ;

} ;

IfQueue.prototype.push = function ( value ) {

	if ( this.front === null ) {

		this.front = this.back = new Node( value , null ) ;

	}

	else {

		this.back = this.back.next = new Node( value , null ) ;

	}

} ;

/**
 * Only valid if IfQueue#empty is false.
 */

IfQueue.prototype.shift = function ( ) {

	const node = this.front ;

	this.front = node.next ;

	// necessary for garbage collector

	if ( this.back === node ) this.back = null ;

	return node.value ;

} ;
