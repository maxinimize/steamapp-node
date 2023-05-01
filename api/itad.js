import request from '../utils/request.js'

export const reqDiscountDetails = (country, shop, allowedShop, ids) => request({ url: `https://api.isthereanydeal.com/v01/game/overview/?key=${process.env.APIKEY}}&country=${country}&shop=${shop}&ids=${ids}&allowed=${allowedShop}`, method: 'GET' })