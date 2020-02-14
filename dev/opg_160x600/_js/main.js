
let list_a1 = ['.ta_1']
const list_a2 = ['.ta_2', '.ta_3']
const list_a3 = ['.ta_4', '.ta_5']

const list_b1 = ['.tb_1']
const list_b2 = ['.tb_2']
const list_b3 = ['.tb_3', '.tb_4', '.tb_5']




const obj = {y:"-=15", opacity:0}
const delay = "+=.15"
const time = .22

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

	tl.from(".tw_1", time, {...obj}, delay)
	tl.from(".tw_2", time, {...obj}, delay)
	tl.from(".tw_3", time, {...obj}, delay)
	tl.from(".tw_4", time, {...obj}, delay)

	// tl.add(sentence(list_a1.concat(list_a2).concat(list_a3)), "+=.3")


	// console.log(list_a1.concat(list_a2).concat(list_a3));
	// tl.add(sentence(list_a2), `+=.4`)
	// tl.add(sentence(list_a3), `+=.4`)


	tl.add("end", 5)

	tl.to(['.bar1', '.ta', ".bg"], .4, {opacity:0}, "end")
	
	

	tl.from('.bar2', .2, {width:0}, "+=.5")

	tl.from(".tw_5", time, {...obj}, delay)
	tl.from(".tw_6", time, {...obj}, delay)
	tl.from(".tw_7", time, {...obj}, delay)
	tl.from(".tw_8", time, {...obj}, delay)

	// tl.add(sentence(list_b1.concat(list_b2).concat(list_b3)), `+=.3`)
	// tl.add(sentence(list_b2), `+=.2`)
	// tl.add(sentence(list_b3), `+=.2`)
	

	// tl.set([".t3", ".t2"], {filter:'none'}, 11)
}

function sentence(list){
	const tl = new TimelineMax()
	list.map((item, i)=>{
		const delay = i * .05
		tl.from(item, .1, {opacity:0}, `+=${delay}`)		
	})
	return tl
}


start()


module.exports = {};

