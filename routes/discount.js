import express from 'express'
import { getDiscountDetails } from '../controllers/itad.js' 

const discountRouter = express.Router()

//get a name and id data list of games for a developer or publisher in once
discountRouter.post('/', getDiscountDetails)

export default discountRouter