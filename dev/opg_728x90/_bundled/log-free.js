(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var list_a1 = ['.ta_1', '.ta_2', '.ta_3', '.ta_4'];

var list_b1 = ['.tb_1', '.tb_2', '.tb_3', '.tb_4', '.tb_5', '.tb_6', '.tb_7', '.tb_8'];
// const list_b2 = ['.tb_4', '.tb_5']
// const list_b3 = ['.tb_6', '.tb_7', '.tb_8']

TweenLite.defaultEase = Power1.easeInOut;

var pause = .45;
function start() {
	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });
	TweenMax.from('.bg', 8, { y: 0 });

	tl.add("start", "+=.3");
	tl.from('.bar', .2, { height: 0 }, "start");

	tl.add(sentence(list_a1), "+=.3");

	tl.to('.ta', .4, { opacity: 0 }, "+=2.5");

	tl.add(sentence(list_b1), '+=' + pause);
	// tl.add(sentence(list_b2), `+=${.3}`)
	// tl.add(sentence(list_b3), `+=${pause}`)

	// tl.set([".t3", ".t2"], {filter:'none'}, 11)
}

function sentence(list) {
	var tl = new TimelineMax();
	list.map(function (item, i) {
		var delay = i * .05;
		tl.from(item, .1, { opacity: 0 }, '+=' + delay);
	});
	return tl;
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
