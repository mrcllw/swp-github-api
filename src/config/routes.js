import { Router } from 'express'
import usersController from '../controllers/users.controller'
import userController from '../controllers/user.controller'
import reposController from '../controllers/repos.controller'

export default app => {
  const router = Router()

  router.get('/api/users', usersController)
  router.get('/api/users/:username/details', userController)
  router.get('/api/users/:username/repos', reposController)

  app.use(router)
}
