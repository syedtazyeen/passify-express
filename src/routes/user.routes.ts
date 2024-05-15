import express from 'express';
import UserController from '../controllers/user/user.controller';
import authentication from '../middlewares/authentication';
const userRouter = express.Router();

userRouter.get('/state', authentication, UserController.userState)


export default userRouter