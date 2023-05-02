import request from '../utils/request.js'

export const reqDiscountDetails = (country, shop, allowed, ids) => request({ url: `https://api.isthereanydeal.com/v01/game/overview/?key=${process.env.APIKEY}&country=${country}&shop=${shop}&ids=${ids}&allowed=${allowed}`, method: 'GET' })

//export const reqDiscountDetails = params => request({ url: `https://api.isthereanydeal.com/v01/game/overview/`, method: 'GET', params })