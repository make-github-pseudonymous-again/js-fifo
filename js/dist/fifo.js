( function ( ) {

'use strict' ;

var definition = function ( exports , undefined ) {


/* js/src/DllNode.js */

var DllNode = function ( prev , next , value ) {

	this.prev = prev ;
	this.next = next ;
	this.value = value ;

} ;

exports.DllNode = DllNode ;

/* js/src/DllQueue.js */

/**
 * DllQueue#peek only valid if DllQueue#empty is false.
 * DllQueue#shift only valid if DllQueue#empty is false.
 */

var DllQueue = function ( ) {

	this.front = new DllNode( null , null , null ) ;
	this.back = new DllNode( this.front , null , null ) ;
	this.front.next = this.back ;

} ;

DllQueue.prototype.empty = function ( ) {

	return this.front.next === this.back ;

} ;

/**
 * Only valid if DllQueue#empty is false.
 */

DllQueue.prototype.peek = function ( ) {

	return this.front.next.value ;

} ;

DllQueue.prototype.push = function ( value ) {

	var node ;

	node = new DllNode( this.back.prev , this.back , value ) ;

	this.back.prev = node.prev.next = node ;

} ;

/**
 * Only valid if DllQueue#empty is false.
 */

DllQueue.prototype.shift = function ( ) {

	var node ;

	node = this.front.next ;

	this.front.next = node.next ;

	node.next.prev = this.front ;

	return node.value ;

} ;

exports.DllQueue = DllQueue ;

/* js/src/IfQueue.js */

/**
 * IfQueue#peek only valid if IfQueue#empty is false.
 * IfQueue#shift only valid if IfQueue#empty is false.
 */

var IfQueue = function ( ) {

	this.front = null ;
	this.back = null ;

} ;

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

	var node ;

	node = this.front ;

	this.front = node.next ;

	// necessary for garbage collector

	if ( this.back === node ) this.back = null ;

	return node.value ;

} ;

exports.IfQueue = IfQueue ;

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

return exports ;
} ;
if ( typeof exports === "object" ) {
	definition( exports ) ;
}
else if ( typeof define === "function" && define.amd ) {
	define( "aureooms-js-fifo" , [ ] , function ( ) { return definition( { } ) ; } ) ;
}
else if ( typeof window === "object" && typeof window.document === "object" ) {
	definition( window["fifo"] = { } ) ;
}
else console.error( "unable to detect type of module to define for aureooms-js-fifo") ;
} )( ) ;
