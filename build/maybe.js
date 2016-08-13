"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Maybe = exports.Maybe = function Maybe(x) {
	return this.__value = x;
};
Maybe.of = function (x) {
	return new Maybe(x);
};
Maybe.prototype.isNothing = function () {
	return this.__value === null || this.__value === undefined;
};
Maybe.prototype.map = function (f) {
	return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
};