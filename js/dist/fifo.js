(function(exports, undefined){

	'use strict';


/* js/src/Node.js */

var Node = function ( value , next ) {

	this.value = value ;
	this.next = next ;

} ;

exports.Node = Node ;

/* js/src/NodeQueue.js */

/**
 * NodeQueue#peek only valid if NodeQueue#empty is false.
 * NodeQueue#shift only valid if NodeQueue#empty is false.
 */

var NodeQueue = function ( ) {

	this.front = new Node( null , null ) ;
	this.back = this.front ;

} ;

NodeQueue.prototype.empty = function ( ) {

	return this.front === this.back ;

} ;

/**
 * Only valid if NodeQueue#empty is false.
 */

NodeQueue.prototype.peek = function ( ) {

	return this.front.next.value ;

} ;

NodeQueue.prototype.push = function ( value ) {

	this.back = this.back.next = new Node( value , null ) ;

} ;

/**
 * Only valid if NodeQueue#empty is false.
 */

NodeQueue.prototype.shift = function ( ) {

	var node ;

	node = this.front.next ;

	this.front.next = node.next ;

	if ( this.back === node ) this.back = this.front ;

	return node.value ;

} ;

exports.NodeQueue = NodeQueue ;

})(typeof exports === 'undefined' ? this['fifo'] = {} : exports);
