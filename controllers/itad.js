import { reqDiscountDetails } from '../api/itad.js' 

export const getDiscountDetails = async (req, res) => {
  const { country, shop, allowedShop, ids } = req.query
	let gameData = {}
	try {
		// get total number of the company
		let result = await reqGameNum(type, name)
		let totalNum = result.total_count
		// get list with page number and fixed page size (100)
		for (let i = 1; i <= Math.ceil(totalNum / 100); i++) {
			result = await reqGameId(type, name, i)
			for (let j = 0; j < result.items.length; j++) {
				let temp = result.items[j].logo.match(/(apps|bundles|subs).*?(\/[0-9]*)/g)[0].split('s/')
				let id = temp[0] + '/' + temp[1]
				if (gameData[id]) {
					console.log(gameData[id], id, result.items[j].name, i, j, gameData[id] === result.items[j].name)
				}
				if (gameData[id] && gameData[id] !== result.items[j].name) {
					console.log('duplicate id')
					continue
				}
				gameData[id] = result.items[j].name
			}
		}
		res.json({ code: 1, gameData, totalNum, realTotalNum: Object.keys(gameData).length, })
	} catch (error) {
		console.log(error)
		res.json({ code: -1, msg: 'error' })
	}
}