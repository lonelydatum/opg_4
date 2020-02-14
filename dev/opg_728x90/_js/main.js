
const list_a1 = ['.ta_1']
const list_a2 = ['.ta_2', '.ta_3']
const list_a3 = ['.ta_4']


const list_b1 = ['.tb_1', '.tb_2', '.tb_3', '.tb_4', '.tb_5', '.tb_6', '.tb_7', '.tb_8']
// const list_b2 = ['.tb_4', '.tb_5']
// const list_b3 = ['.tb_6', '.tb_7', '.tb_8']



const obj = {y:"-=10", opacity:0}
const delay = "+=.15"
const time = .25

TweenLite.defaultEase = Power1.easeInOut

const pause = .45
function start(){
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	TweenMax.from('.bg', 8, {y:0})

	tl.add("start", "+=.3")
	tl.from('.bar', .2, {height:0}, "start")


	tl.from(".tw_1", time, {...obj}, delay)
	tl.from(".tw_2", time, {...obj}, delay)
	tl.from(".tw_3", time, {...obj}, delay)

	// tl.add(sentence(list_a1), "+=.3")
	// tl.add(sentence(list_a2), "+=.3")
	// tl.add(sentence(list_a3), "+=.3")
	

	tl.to('.ta', .4, {opacity:0}, "+=2.5")

	tl.from(".tw_4", time, {...obj}, delay)
	tl.from(".tw_5", time, {...obj}, delay)
	// tl.add(sentence(list_b2), `+=${.3}`)
	// tl.add(sentence(list_b3), `+=${pause}`)
	




	// tl.set([".t3", ".t2"], {filter:'none'}, 11)
}

function sentence(list){
	const tl = new TimelineMax()
	list.map((item, i)=>{
		const delay = i * .05
		tl.from(item, .1, {y:"-=10", opacity:0}, `+=${delay}`)		
	})
	return tl
}


start()


module.exports = {};

