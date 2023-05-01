import request from '../utils/request.js'

export const reqDetails = appId => request({ url: `https://store.steampowered.com/api/appdetails?appids=${appId}`, method: 'GET' })

export const reqSearch = params => request({ url: `https://store.steampowered.com/search/results/`, method: 'GET', params })