
import express from 'express'
import { userSignUp } from '../controllers/handlers/userSignUp.js'
import { userSignIn } from '../controllers/handlers/userSignIn.js'
import {userImageUpload} from '../controllers/Helper/userImageUpload.js'
import {getUser} from '../controllers/handlers/getUser.js'
import { updateUser } from "../controllers/handlers/updateUser.js"
import {userAuth} from '../utils/userAuth.js'

const router = express.Router()


router.post('/signup', userSignUp)
router.post('/', userSignIn)
router.get('/userdashboard',userAuth,getUser )


export default router