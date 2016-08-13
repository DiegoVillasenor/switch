import {curry, fromPairs} from 'ramda';
import {Maybe} from './maybe.js';


export var Switch = function(options) {
	this.options = fromPairs(options);
};

Switch.of = function(options) {
	return new Switch(options);
};

Switch.prototype.isFunction = function(state) {
	return typeof this.options[state] === 'function';
};

Switch.prototype.run = function(state) {
	return this.isFunction(state) ? this.options[state]() : null;
}
