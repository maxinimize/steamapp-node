import express from 'express'
import cors from 'cors'
import { getList, getDetails } from './controllers/steam.js' 

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => { res.send('it is working!') })

//get details of games for a given appId
app.get('/game/', async (req, res) => getDetails(req, res))

// //get total num of games for a developer or publisher
// app.get('/games/', async (req, res) => getGameNum(req, res))

// //get a name and id data list of games for a developer or publisher, need to get total num first
// app.get('/list/', async (req, res) => getGameId(req, res))

//get a name and id data list of games for a developer or publisher in once
app.get('/list/', async (req, res) => getList(req, res))

app.listen(process.env.PORT, () => {
	console.log(`app is on port ${process.env.PORT}`);
})