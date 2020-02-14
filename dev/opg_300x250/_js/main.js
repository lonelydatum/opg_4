
const list_a1 = ['.line_1', '.line_2']


const list_b1 = ['.tb_1', '.tb_2']
const list_b2 = ['.tb_3', '.tb_4']
const list_b3 = ['.tb_5', '.tb_6', '.tb_7']

const list_b4 = ['.tb_8']

const obj = {y:"-=15", opacity:0}
const delay = "+=.15"
const time = .25

TweenLite.defaultEase = Power1.easeInOut

const pause = .45
function start(){
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	TweenMax.from('.bg', 9, {y:0})

	tl.add("start", "+=.3")
	tl.from('.bar', .2, {width:0}, "start")

	tl.from(".line_1", time, {...obj}, "+=.2")
	tl.from(".line_2", time, {...obj}, "+=.5")

	tl.to('.ta', .2, {opacity:0}, "+=1.2")

	tl.from(".line_3", time, {...obj}, "+=.1")
	tl.from(".line_4", time, {...obj}, "+=1.1")
	tl.from(".line_5", time, {...obj}, "+=.8")
	// tl.add(sentence(list_b2), `+=${.3}`)
	// tl.add(sentence(list_b3), `+=${pause}`)
	// tl.add(sentence(list_b4), `+=${.6}`)




	tl.set([".t3", ".t2"], {filter:'none'}, 11)
}

// function sentence(list){
// 	const tl = new TimelineMax()
// 	list.map((item, i)=>{
// 		const delay = i * .1
// 		tl.from(item, .1, {opacity:0}, `+=${delay}`)		
// 	})
// 	return tl
// }


start()


module.exports = {};

