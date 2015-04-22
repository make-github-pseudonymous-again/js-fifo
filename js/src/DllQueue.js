
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
