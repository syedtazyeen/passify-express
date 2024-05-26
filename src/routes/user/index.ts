import express from 'express';
const userRouter = express.Router();

import stateRouter from './state.routes';
import profileRouter from './profile.routes';
import { userAuthentication } from '../../middlewares/authentication';

// protected sub-route //
userRouter.use('/state', userAuthentication, stateRouter)

// public sub-route //
userRouter.use('/profile', profileRouter)


export default userRouter;
