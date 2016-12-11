'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = IfQueue;

var _Node = require('./Node');

var _Node2 = _interopRequireDefault(_Node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * IfQueue#peek only valid if IfQueue#empty is false.
 * IfQueue#shift only valid if IfQueue#empty is false.
 */

function IfQueue() {

	this.front = null;
	this.back = null;
}

IfQueue.prototype.empty = function () {

	return this.front === null;
};

/**
 * Only valid if IfQueue#empty is false.
 */

IfQueue.prototype.peek = function () {

	return this.front.value;
};

IfQueue.prototype.push = function (value) {

	if (this.front === null) {

		this.front = this.back = new _Node2.default(value, null);
	} else {

		this.back = this.back.next = new _Node2.default(value, null);
	}
};

/**
 * Only valid if IfQueue#empty is false.
 */

IfQueue.prototype.shift = function () {

	var node = this.front;

	this.front = node.next;

	// necessary for garbage collector

	if (this.back === node) this.back = null;

	return node.value;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JZlF1ZXVlLmpzIl0sIm5hbWVzIjpbIklmUXVldWUiLCJmcm9udCIsImJhY2siLCJwcm90b3R5cGUiLCJlbXB0eSIsInBlZWsiLCJ2YWx1ZSIsInB1c2giLCJuZXh0Iiwic2hpZnQiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFPd0JBLE87O0FBUHhCOzs7Ozs7QUFFQTs7Ozs7QUFLZSxTQUFTQSxPQUFULEdBQXFCOztBQUVuQyxNQUFLQyxLQUFMLEdBQWEsSUFBYjtBQUNBLE1BQUtDLElBQUwsR0FBWSxJQUFaO0FBRUE7O0FBRURGLFFBQVFHLFNBQVIsQ0FBa0JDLEtBQWxCLEdBQTBCLFlBQWE7O0FBRXRDLFFBQU8sS0FBS0gsS0FBTCxLQUFlLElBQXRCO0FBRUEsQ0FKRDs7QUFNQTs7OztBQUlBRCxRQUFRRyxTQUFSLENBQWtCRSxJQUFsQixHQUF5QixZQUFhOztBQUVyQyxRQUFPLEtBQUtKLEtBQUwsQ0FBV0ssS0FBbEI7QUFFQSxDQUpEOztBQU1BTixRQUFRRyxTQUFSLENBQWtCSSxJQUFsQixHQUF5QixVQUFXRCxLQUFYLEVBQW1COztBQUUzQyxLQUFLLEtBQUtMLEtBQUwsS0FBZSxJQUFwQixFQUEyQjs7QUFFMUIsT0FBS0EsS0FBTCxHQUFhLEtBQUtDLElBQUwsR0FBWSxtQkFBVUksS0FBVixFQUFrQixJQUFsQixDQUF6QjtBQUVBLEVBSkQsTUFNSzs7QUFFSixPQUFLSixJQUFMLEdBQVksS0FBS0EsSUFBTCxDQUFVTSxJQUFWLEdBQWlCLG1CQUFVRixLQUFWLEVBQWtCLElBQWxCLENBQTdCO0FBRUE7QUFFRCxDQWREOztBQWdCQTs7OztBQUlBTixRQUFRRyxTQUFSLENBQWtCTSxLQUFsQixHQUEwQixZQUFhOztBQUV0QyxLQUFNQyxPQUFPLEtBQUtULEtBQWxCOztBQUVBLE1BQUtBLEtBQUwsR0FBYVMsS0FBS0YsSUFBbEI7O0FBRUE7O0FBRUEsS0FBSyxLQUFLTixJQUFMLEtBQWNRLElBQW5CLEVBQTBCLEtBQUtSLElBQUwsR0FBWSxJQUFaOztBQUUxQixRQUFPUSxLQUFLSixLQUFaO0FBRUEsQ0FaRCIsImZpbGUiOiJJZlF1ZXVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJyA7XG5cbi8qKlxuICogSWZRdWV1ZSNwZWVrIG9ubHkgdmFsaWQgaWYgSWZRdWV1ZSNlbXB0eSBpcyBmYWxzZS5cbiAqIElmUXVldWUjc2hpZnQgb25seSB2YWxpZCBpZiBJZlF1ZXVlI2VtcHR5IGlzIGZhbHNlLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElmUXVldWUgKCApIHtcblxuXHR0aGlzLmZyb250ID0gbnVsbCA7XG5cdHRoaXMuYmFjayA9IG51bGwgO1xuXG59XG5cbklmUXVldWUucHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24gKCApIHtcblxuXHRyZXR1cm4gdGhpcy5mcm9udCA9PT0gbnVsbCA7XG5cbn0gO1xuXG4vKipcbiAqIE9ubHkgdmFsaWQgaWYgSWZRdWV1ZSNlbXB0eSBpcyBmYWxzZS5cbiAqL1xuXG5JZlF1ZXVlLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKCApIHtcblxuXHRyZXR1cm4gdGhpcy5mcm9udC52YWx1ZSA7XG5cbn0gO1xuXG5JZlF1ZXVlLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRpZiAoIHRoaXMuZnJvbnQgPT09IG51bGwgKSB7XG5cblx0XHR0aGlzLmZyb250ID0gdGhpcy5iYWNrID0gbmV3IE5vZGUoIHZhbHVlICwgbnVsbCApIDtcblxuXHR9XG5cblx0ZWxzZSB7XG5cblx0XHR0aGlzLmJhY2sgPSB0aGlzLmJhY2submV4dCA9IG5ldyBOb2RlKCB2YWx1ZSAsIG51bGwgKSA7XG5cblx0fVxuXG59IDtcblxuLyoqXG4gKiBPbmx5IHZhbGlkIGlmIElmUXVldWUjZW1wdHkgaXMgZmFsc2UuXG4gKi9cblxuSWZRdWV1ZS5wcm90b3R5cGUuc2hpZnQgPSBmdW5jdGlvbiAoICkge1xuXG5cdGNvbnN0IG5vZGUgPSB0aGlzLmZyb250IDtcblxuXHR0aGlzLmZyb250ID0gbm9kZS5uZXh0IDtcblxuXHQvLyBuZWNlc3NhcnkgZm9yIGdhcmJhZ2UgY29sbGVjdG9yXG5cblx0aWYgKCB0aGlzLmJhY2sgPT09IG5vZGUgKSB0aGlzLmJhY2sgPSBudWxsIDtcblxuXHRyZXR1cm4gbm9kZS52YWx1ZSA7XG5cbn0gO1xuIl19