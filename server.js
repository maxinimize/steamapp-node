import express from 'express'
import cors from 'cors'
import { getGameNum, getGameId, getList } from './controllers/steam.js' 

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => { res.send('it is working!') })

//get total num of games for a developer or publisher
app.get('/games/', async (req, res) => getGameNum(req, res))

//get a name and id data list of games for a developer or publisher, need to get total num first
app.get('/list/', async (req, res) => getGameId(req, res))

//get a name and id data list of games for a developer or publisher in once
app.get('/lists/', async (req, res) => getList(req, res))

app.listen(3000, () => {
	console.log(`app is on port 3000`);
})