import express from 'express';
const authRouter = express.Router();

// controllers  //
import {
    signInService,
    signUpService
} from '../controllers/auth';


authRouter.post('/sign-in', (req, res, next) => { signInService })
authRouter.post('/sign-up', (req, res, next) => { signUpService })
authRouter.get('/forget-password', (req, res, next) => { })
authRouter.put('/reset-password', (req, res, next) => { })


export default authRouter