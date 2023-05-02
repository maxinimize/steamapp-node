import express from 'express'
import { getDetails } from '../controllers/steam.js' 

const gameRouter = express.Router()

//get details of games for a given appId
gameRouter.get('/', getDetails)

export default gameRouter