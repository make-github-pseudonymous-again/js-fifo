(function(exports, undefined){

	'use strict';


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
