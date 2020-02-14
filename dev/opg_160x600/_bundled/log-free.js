(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var list_a1 = ['.ta_1'];
var list_a2 = ['.ta_2', '.ta_3'];
var list_a3 = ['.ta_4', '.ta_5'];

var list_b1 = ['.tb_1'];
var list_b2 = ['.tb_2'];
var list_b3 = ['.tb_3', '.tb_4', '.tb_5'];

var obj = { y: "-=15", opacity: 0 };
var delay = "+=.15";
var time = .22;

TweenLite.defaultEase = Power1.easeInOut;

var pause = .45;
function start() {
	var tlbg = new TimelineMax();

	tlbg.from('.bg', 4, { x: 0 });
	tlbg.from('.bg2', 6, { x: 0 });

	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });

	tl.add("start", "+=.3");
	tl.from('.bar1', .2, { width: 0 }, "start");

	tl.from(".tw_1", time, _extends({}, obj), delay);
	tl.from(".tw_2", time, _extends({}, obj), delay);
	tl.from(".tw_3", time, _extends({}, obj), delay);
	tl.from(".tw_4", time, _extends({}, obj), delay);

	// tl.add(sentence(list_a1.concat(list_a2).concat(list_a3)), "+=.3")

	// console.log(list_a1.concat(list_a2).concat(list_a3));
	// tl.add(sentence(list_a2), `+=.4`)
	// tl.add(sentence(list_a3), `+=.4`)

	tl.add("end", 5);

	tl.to(['.bar1', '.ta', ".bg"], .4, { opacity: 0 }, "end");

	tl.from('.bar2', .2, { width: 0 }, "+=.5");

	tl.from(".tw_5", time, _extends({}, obj), delay);
	tl.from(".tw_6", time, _extends({}, obj), delay);
	tl.from(".tw_7", time, _extends({}, obj), delay);
	tl.from(".tw_8", time, _extends({}, obj), delay);

	// tl.add(sentence(list_b1.concat(list_b2).concat(list_b3)), `+=.3`)
	// tl.add(sentence(list_b2), `+=.2`)
	// tl.add(sentence(list_b3), `+=.2`)

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
