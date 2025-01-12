import {register} from '../controllers/login.controller.js'
import {Router} from "express"
import {verifyjwt} from '../middleware/auth.middleware.js'

const router = Router()

router.route('/register').post(register)
// router.route('/login').post(login)
// router.route('/logout').post(verifyjwt,logout)

export default router