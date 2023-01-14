import {getRandomInt} from "./random-funcs";

function getOrder(ingredients){
	console.log(`Заказ`);
	let pieces=ingredients.filter((elem=>elem.type!=='bun')).filter(elem=>Math.random() > 0.5)
	let tempBuns= ingredients.filter((elem=>elem.type==='bun'))
	let buns=tempBuns[getRandomInt(tempBuns.length-1)]
	let order = [].concat(buns,pieces)
	order.forEach(elem=>elem.count=1)
	return order
}

export default getOrder;