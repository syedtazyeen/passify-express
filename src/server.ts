import express from 'express';
import dotenv from 'dotenv'
import router from './routes';
import passport from 'passport'
import cors from 'cors'
import session from 'express-session';

// env
dotenv.config()

const app = express();
const PORT = process.env.PORT || 1000
const API_VERSION = process.env.API_VERSION || '1'

//cors
app.use(cors({
  origin: process.env.CLIENT_BASE_URL!,
  credentials: true
}))

// express session
app.use(session({
  secret: process.env.EXPRESS_SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
}));

// passportjs
app.use(passport.initialize());
app.use(passport.session())

// use routes
app.use(`/v${API_VERSION}`, router);

// default console log
app.listen({ port: PORT }, () => {
  console.log(`\nserver running at \thttp://localhost:${PORT}/v${API_VERSION}`);
})




