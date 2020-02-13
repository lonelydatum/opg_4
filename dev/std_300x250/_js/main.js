
const list_1 = ['.tw_1', '.tw_2']
const list_2 = ['.tw_3', '.tw_4']
const list_3 = ['.tw_5', '.tw_6']


TweenLite.defaultEase = Power1.easeInOut

function start(){
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	TweenMax.from('.bg', 13, {y:0})

	tl.add("start", "+=.5")
	tl.from('.bar', .2, {width:0}, "start")

	tl.add(sentence(list_1), "start")

	tl.to('.t1', .3, {opacity:0}, "+=2")

	tl.add(sentence(list_2), "+=.1")

	tl.add(sentence(list_3), "+=2")

	tl.set([".t3", ".t2"], {filter:'none'}, 11)
}

function sentence(list){

	const tl = new TimelineMax()
	list.map((item, i)=>{

		const delay = i * .25
		console.log(delay);
		tl.from(item, .1, {opacity:0}, `+=${delay}`)		
	})

	return tl
}


start()


module.exports = {};

