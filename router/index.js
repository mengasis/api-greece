import { Router } from 'express'

import routerGod from './God'

const api = Router()

api.use('/mythology/', routerGod)

export default api