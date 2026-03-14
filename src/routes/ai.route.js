import  {breakTaskWithAI} from  '../controllers/ai.controller.js'
import { Router } from 'express'
import { verifyJWT } from '../middlewares/auth.middleware.js'


const router = Router()

router.route('/break-task').post(
    verifyJWT, breakTaskWithAI
)

export default router