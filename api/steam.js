import request from '../utils/request.js'

export const reqGameDetails = (appId) => request({ url: `https://store.steampowered.com/api/appdetails?appids=${appId}`, method: 'GET' })

export const reqGameNum = (type, name) => request({ url: `https://store.steampowered.com/search/results/?${type}=${name}&category1=998&infinite=1`, method: 'GET' })

export const reqGameId = (type, name, pageNum) => request({ url: `https://store.steampowered.com/search/results/?${type}=${name}&count=100&page=${pageNum}&category1=998&json=1`, method: 'GET' })