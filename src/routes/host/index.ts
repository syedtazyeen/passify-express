import express from 'express';
import stateRouter from './state.routes';
import actRouter from './act.routes';
import { creatorAuthentication } from '../../middlewares/authentication';
const hostRouter = express.Router();

// protected
hostRouter.use('/state', creatorAuthentication , stateRouter)

// public 
hostRouter.use('/act', actRouter)


export default hostRouter;
