import { reqGameNum, reqGameId } from '../api/steam.js' 

export const getGameNum = async (req, res) => {
  const { type, name } = req.query
	try {
		const result = await reqGameNum(type, name)
		res.json({ code: 1, totalNum: result.data.total_count })
	} catch (error) {
		console.log(error)
		res.json({ code: -1, msg: 'error' })
	}
}

export const getGameId = async (req, res) => {
  const { type, name, totalNum } = req.query
	let gameData = {}
	let gameList = []
	try {
		for (let i = 1; i <= Math.ceil(totalNum / 100); i++) {
			const result = await reqGameId(type, name, i)
			for (let j = 0; j < result.data.items.length; j++) {
				let temp = result.data.items[j].logo.match(/(apps|bundles|subs).*?(\/[0-9]*)/g)[0].split('s/')
				let id = temp[0] + '/' + temp[1]
				if (gameData[id]) {
					console.log(gameData[id], id, result.data.items[j].name, i, j, gameData[id] === result.data.items[j].name)
				}
				if (gameData[id] && gameData[id] !== result.data.items[j].name) {
					console.log(111)
					continue
				}
				gameData[id] = result.data.items[j].name
				gameList.push(temp[0] + '%2F' + temp[1])
			}
		}
		gameList = [...new Set(gameList)]
		res.json({ code: 1, gameData, gameList })
	} catch (error) {
		console.log(error)
		res.json({ code: -1, msg: 'error' })
	}
}

export const getList = async (req, res) => {
  const { type, name } = req.query
	let gameData = {}
	let gameList = []
	try {
		let result = await reqGameNum(type, name)
		let totalNum = result.data.total_count
		for (let i = 1; i <= Math.ceil(totalNum / 100); i++) {
			result = await reqGameId(type, name, i)
			for (let j = 0; j < result.data.items.length; j++) {
				let temp = result.data.items[j].logo.match(/(apps|bundles|subs).*?(\/[0-9]*)/g)[0].split('s/')
				let id = temp[0] + '/' + temp[1]
				if (gameData[id]) {
					console.log(gameData[id], id, result.data.items[j].name, i, j, gameData[id] === result.data.items[j].name)
				}
				if (gameData[id] && gameData[id] !== result.data.items[j].name) {
					console.log(111)
					continue
				}
				gameData[id] = result.data.items[j].name
				gameList.push(temp[0] + '%2F' + temp[1])
			}
		}
		gameList = [...new Set(gameList)]
		res.json({ code: 1, gameData, gameList, totalNum })
	} catch (error) {
		console.log(error)
		res.json({ code: -1, msg: 'error' })
	}
}