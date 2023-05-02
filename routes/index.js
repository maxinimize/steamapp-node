import express from 'express'

const indexRouter = express.Router()

indexRouter.get('/', (req, res) => { res.send('it is working!') })

export default indexRouter