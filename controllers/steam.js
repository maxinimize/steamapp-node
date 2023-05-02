import { reqDetails, reqSearch } from '../api/steam.js' 

export const getDetails = async (req, res) => {
  const { appId } = req.query
	try {
		const result = await reqDetails(appId)
		if (result[appId].success) {
			res.json({ code: 1, details: result[appId].data })
		}
	} catch (error) {
		console.log(error)
		res.json({ code: -1, msg: 'error' })
	}
}

// export const getGameNum = async (req, res) => {
//   const { type, name } = req.query
// 	const params = {
// 		category1: 998,
// 		infinite: 1
// 	}
// 	params[type] = name
// 	try {
// 		const result = await reqSearch(params)
// 		res.json({ code: 1, totalNum: result.total_count })
// 	} catch (error) {
// 		console.log(error)
// 		res.json({ code: -1, msg: 'error' })
// 	}
// }

// export const getGameId = async (req, res) => {
//   const { type, name, totalNum } = req.query
// 	let gameData = {}
// 	const params = {
// 		category1: 998,
// 		infinite: 1,
// 		count: 100
// 	}
// 	params[type] = name
// 	try {
// 		for (let i = 1; i <= Math.ceil(totalNum / 100); i++) {
// 			params.start = (i - 1) * 100
// 			const result = await reqSearch(params)
// 			const id = result.results_html.match(/(app|bundle|sub)(\/[0-9]*)/g)
// 			const name = result.results_html.match(/(?<=<span\s+class="title">).+?(?=<\/span>)/g)
// 			//const date = result.results_html.match(/(?<=<div\s+class="col search_released responsive_secondrow">).+?(?=<\/div>)/g)
// 			for (let i = 0; i < id.length; i++) {
// 				gameData[id[i]] = {
// 					name: name[i],
// 					//date: date[i]
// 				}
// 			}
// 		}
// 		res.json({ code: 1, gameData, totalNum, realTotalNum: Object.keys(gameData).length })
// 	} catch (error) {
// 		console.log(error)
// 		res.json({ code: -1, msg: 'error' })
// 	}
// }

export const getList = async (req, res) => {
  const { type, name } = req.query
	const gameData = {}
	const params = {
		category1: 998,
		infinite: 1,
		count: 100,
	}
	params[type] = name
	try {
		// get total number of the company
		let result = await reqSearch(params)
		const totalNum = result.total_count
		// get list with page number and fixed page size (100)
		for (let i = 1; i <= Math.ceil(totalNum / 100); i++) {
			params.start = (i - 1) * 100
			result = await reqSearch(params)
			const id = result.results_html.match(/(app|bundle|sub)(\/[0-9]*)/g)
			const name = result.results_html.match(/(?<=<span\s+class="title">).+?(?=<\/span>)/g)
			//const date = result.results_html.match(/(?<=<div\s+class="col search_released responsive_secondrow">).+?(?=<\/div>)/g)
			for (let j = 0; j < id.length; j++) {
				gameData[id[j]] = {
					name: name[j],
					//date: date[j]
				}
			}
		}
		res.json({ code: 1, gameData, totalNum, realTotalNum: Object.keys(gameData).length, })
	} catch (error) {
		console.log(error)
		res.json({ code: -1, msg: 'error' })
	}
}