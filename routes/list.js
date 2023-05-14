import express from 'express'
import { getList } from '../controllers/steam.js' 

const listRouter = express.Router()

//get a name and id data list of games for a developer or publisher in once
listRouter.post('/', getList)

export default listRouter