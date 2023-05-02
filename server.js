import express from 'express'
import cors from 'cors'
import indexRouter from './routes/index.js' 
import gameRouter from './routes/game.js' 
import listRouter from './routes/list.js' 
import discountRouter from './routes/discount.js' 

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', indexRouter)
app.use('/game', gameRouter)
app.use('/list', listRouter)
app.use('/discount', discountRouter)

app.listen(process.env.PORT, () => {
	console.log(`app is on port ${process.env.PORT}`);
})