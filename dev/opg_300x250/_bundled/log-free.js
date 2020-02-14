(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var list_a1 = ['.line_1', '.line_2'];

var list_b1 = ['.tb_1', '.tb_2'];
var list_b2 = ['.tb_3', '.tb_4'];
var list_b3 = ['.tb_5', '.tb_6', '.tb_7'];

var list_b4 = ['.tb_8'];

var obj = { y: "-=15", opacity: 0 };
var delay = "+=.15";
var time = .25;

TweenLite.defaultEase = Power1.easeInOut;

var pause = .45;
function start() {
	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });
	TweenMax.from('.bg', 9, { y: 0 });

	tl.add("start", "+=.3");
	tl.from('.bar', .2, { width: 0 }, "start");

	tl.from(".line_1", time, _extends({}, obj), "+=.2");
	tl.from(".line_2", time, _extends({}, obj), "+=.5");

	tl.to('.ta', .2, { opacity: 0 }, "+=1.2");

	tl.from(".line_3", time, _extends({}, obj), "+=.1");
	tl.from(".line_4", time, _extends({}, obj), "+=1.1");
	tl.from(".line_5", time, _extends({}, obj), "+=.8");
	// tl.add(sentence(list_b2), `+=${.3}`)
	// tl.add(sentence(list_b3), `+=${pause}`)
	// tl.add(sentence(list_b4), `+=${.6}`)

	tl.set([".t3", ".t2"], { filter: 'none' }, 11);
}

// function sentence(list){
// 	const tl = new TimelineMax()
// 	list.map((item, i)=>{
// 		const delay = i * .1
// 		tl.from(item, .1, {opacity:0}, `+=${delay}`)		
// 	})
// 	return tl
// }

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
