import express from 'express'
import config from './config'

import router from './router'

const app = express()

app.use('/api', router)

app.listen(config.serverPort, () => {
	console.log(`Escuchando en ${config.baseUrl}:${config.serverPort}`)
})