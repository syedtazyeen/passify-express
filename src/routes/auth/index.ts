import express from 'express';
import googleAuthRouter from './google.routes';
import emailAuthRouter from './email.routes';
const authRouter = express.Router();

authRouter.use('/o/google', googleAuthRouter)
authRouter.use('/o/email', emailAuthRouter)


export default authRouter;
