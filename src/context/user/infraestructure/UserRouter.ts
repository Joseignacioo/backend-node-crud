import express from 'express'
import { userController } from './Dependencies';

const userRouter = express.Router();

userRouter.post('id:/welcome', userController.run.bind(userController));

export { userRouter }