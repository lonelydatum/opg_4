
const list_a1 = ['.ta_1']
const list_a2 = ['.ta_2', '.ta_3', '.ta_4']

const list_b1 = ['.tb_1', '.tb_2', '.tb_3']
const list_b2 = ['.tb_4', '.tb_5']
const list_b3 = ['.tb_6', '.tb_7', '.tb_8']





TweenLite.defaultEase = Power1.easeInOut

const pause = .45
function start(){
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	TweenMax.from('.bg', 8, {y:0})

	tl.add("start", "+=.3")
	tl.from('.bar', .2, {height:0}, "start")

	tl.add(sentence(list_a1), "start")
	tl.add(sentence(list_a2), `+=${pause}`)

	tl.to('.ta', .4, {opacity:0}, "+=2")

	tl.add(sentence(list_b1), `+=${pause}`)
	tl.add(sentence(list_b2), `+=${.3}`)
	tl.add(sentence(list_b3), `+=${pause}`)
	




	// tl.set([".t3", ".t2"], {filter:'none'}, 11)
}

function sentence(list){
	const tl = new TimelineMax()
	list.map((item, i)=>{
		const delay = i * .13
		tl.from(item, .1, {opacity:0}, `+=${delay}`)		
	})
	return tl
}


start()


module.exports = {};

