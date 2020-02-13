(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var list_1 = ['.t1_a', '.t1_b', '.t1_c', '.t1_d'];
var list_2 = ['.t2_a', '.t2_b', '.t2_c', '.t2_d'];
var list_3 = ['.t3_a', '.t3_b', '.t3_c', '.t3_d'];

TweenLite.defaultEase = Power1.easeInOut;

function start() {
	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });
	TweenMax.from('.bg', 10, { y: 0 });

	tl.from('.bar', .2, { width: 0 });

	tl.add(sentence(list_1), "+=.1");

	tl.to('.t1', .3, { opacity: 0 }, "+=2");

	tl.add(sentence(list_2), "+=.1");

	tl.add(sentence(list_3), "+=2");

	tl.set([".t3", ".t2"], { filter: 'none' });
}

function sentence(list) {

	var tl = new TimelineMax();
	list.map(function (item, i) {

		var delay = i * .15;
		console.log(delay);
		tl.from(item, .2, { opacity: 0 }, '+=' + delay);
	});

	return tl;
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
