import { Router } from 'express'

import jsonGods from '../data/gods.json'

const api = Router()

api.get('/gods', (req, res, next) =>{
    res.json(jsonGods)
})

api.get('/god', (req, res, next) =>{
  const {
    query: {
      id = 1
    }
  } = req

    const selectedGod = jsonGods.gods.filter(good => good.id === Number(id));
    res.json({ gods: selectedGod})

})

export default api

