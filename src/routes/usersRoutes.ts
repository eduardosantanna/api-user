import { Router } from 'express'

import { userController } from '../controllers/userController'
import { verifyRules } from '../middleware/verifyRules'
import { verifyToken } from '../middleware/verifyToken'

export const usersRoutes = Router()

usersRoutes.get('/user', verifyToken.jwtVerify, verifyRules.rules, userController.index)
usersRoutes.post('/user', userController.store)
usersRoutes.put('/user/:id', verifyToken.jwtVerify, userController.update)
usersRoutes.delete('/user/:id', verifyToken.jwtVerify, userController.clear)


