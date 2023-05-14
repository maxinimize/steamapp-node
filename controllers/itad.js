import { reqDiscountDetails } from '../api/itad.js'
import lodash from 'lodash'
const { chunk } = lodash

export const getDiscountDetails = async (req, res) => {
  let { country, shop, allowed, gameData } = req.body
	const offData = []
	const ids = chunk(Object.keys(gameData), 700)
	// const params = {
	// 	country,
	// 	shop,
	// 	allowed,
	// 	key: process.env.APIKEY
	// }
	try {
		for (let i = 0; i < ids.length; i++) {
			//params.ids = ids[i].join('%2C')
			const res = await reqDiscountDetails(country, shop, allowed, ids[i].join(','))
			//const res = await reqDiscountDetails(params)
			for (let key in res.data) {
				res.data[key].id = key
				res.data[key].name = gameData[key].name
				offData.push(res.data[key])
			}
		}
		res.json({ code: 1, offData })
	} catch (error) {
		//console.error(error)
		res.json({ code: -1, msg: 'error' })
	}
}