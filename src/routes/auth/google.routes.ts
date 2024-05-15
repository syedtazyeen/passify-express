import express from 'express';
import passport from 'passport';
import GoogleService from "../../services/passport/google.service";
const googleAuthRouter = express.Router();

// initiallize passport for google
GoogleService(passport)

const CLIENT_SUCCESS_URL = process.env.CLIENT_BASE_URL! + '/login?status=success'
const CLIENT_FAILURE_URL = process.env.CLIENT_BASE_URL! + '/login?status=failed'

// google auth routes
googleAuthRouter.get('/', passport.authenticate('google', { scope: ['email', 'profile'] }));
googleAuthRouter.get('/callback',
    passport.authenticate('google', {
        failureMessage: 'Failed Google Oauth',
        successRedirect: CLIENT_SUCCESS_URL,
        failureRedirect: CLIENT_FAILURE_URL
    }),
);


export default googleAuthRouter