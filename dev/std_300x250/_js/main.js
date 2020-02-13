
const list_1 = ['.t1_a', '.t1_b', '.t1_c', '.t1_d']
const list_2 = ['.t2_a', '.t2_b', '.t2_c', '.t2_d']
const list_3 = ['.t3_a', '.t3_b', '.t3_c', '.t3_d']


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

	tl.set([".t3", ".t2"], {filter:'none'})
}

function sentence(list){

	const tl = new TimelineMax()
	list.map((item, i)=>{

		const delay = i * .15
		console.log(delay);
		tl.from(item, .2, {opacity:0}, `+=${delay}`)		
	})

	return tl
}


start()


module.exports = {};

