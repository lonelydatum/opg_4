
const list_a1 = ['.ta_1']
const list_a2 = ['.ta_2', '.ta_3']
const list_a3 = ['.ta_4', '.ta_5']

const list_b1 = ['.tb_1']
const list_b2 = ['.tb_2']
const list_b3 = ['.tb_3', '.tb_4', '.tb_5']






TweenLite.defaultEase = Power1.easeInOut

const pause = .45
function start(){
	const tlbg = new TimelineMax()

	tlbg.from('.bg', 4, {x:0})
	tlbg.from('.bg2', 6, {x:0})

	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	

	tl.add("start", "+=.3")
	tl.from('.bar1', .2, {width:0}, "start")

	tl.add(sentence(list_a1), "start")
	tl.add(sentence(list_a2), `+=.4`)
	tl.add(sentence(list_a3), `+=.4`)


	tl.add("end", 5)

	tl.to(['.bar1', '.ta', ".bg"], .4, {opacity:0}, "end")
	
	

	tl.from('.bar2', .2, {width:0}, "+=.5")
	tl.add(sentence(list_b1), `+=.1`)
	tl.add(sentence(list_b2), `+=.2`)
	tl.add(sentence(list_b3), `+=.2`)
	

	// tl.set([".t3", ".t2"], {filter:'none'}, 11)
}

function sentence(list){
	const tl = new TimelineMax()
	list.map((item, i)=>{
		const delay = i * .1
		tl.from(item, .1, {opacity:0}, `+=${delay}`)		
	})
	return tl
}


start()


module.exports = {};

