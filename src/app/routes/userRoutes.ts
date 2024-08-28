import { Router } from 'express'
import { userController } from '../../context/user/infraestructure/Dependencies';


const router = Router()

router.post('/welcome/id:', userController.run.bind(userController));

export default { router }