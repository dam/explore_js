/// <reference path="../../typings/tsd.d.ts" />
'use strict';
import * as util from 'util';
import { EventEmitter } from 'events';

//TODO: refactoring of the code using TypeScript/ES6 class syntax + module export syntax

//Client constructor
var LDJClient = function(stream: EventEmitter) {
	let buffer = '',
	    self = this;
	
	EventEmitter.call(this);
	stream.on('data', function(data) {
		buffer += data;
		let boundary = buffer.indexOf('\n');
		while(boundary !== -1) {
			let input = buffer.substr(0, boundary);
			buffer = buffer.substr(boundary + 1);
			self.emit('message', JSON.parse(input));
			boundary = buffer.indexOf('\n');
		} 
	});
};
// Node.js way to make prototype delegation
util.inherits(LDJClient, EventEmitter);

exports.LDJClient = LDJClient;
exports.connect = function(stream) {
	return new LDJClient(stream);
};