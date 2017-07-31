import { Router } from 'express'

import jsonGods from '../data/gods.js'

const api = Router()

api.get('/gods', (req, res) =>{
	res.json(jsonGods)
})

api.get('/god/:id', (req, res) =>{
	const {
		id = 1
	} = req

	const selectedGod = jsonGods.gods.filter(good => good.id === Number(id))
	res.json({ gods: selectedGod})

})

export default api

