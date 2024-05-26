import express from 'express';
import dotenv from 'dotenv'
import passport from 'passport'
import cors from 'cors'
import session from 'express-session';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';

// local imports
import router from './routes';
import errorHandler from './handlers/error';
import { notFound } from './handlers/response';
import { CLIENT, SERVER, SESSION } from './utils/constants';

// env
dotenv.config()

//app
const app = express();

//cors
app.use(cors({
  origin: CLIENT.BASE_URL,
  credentials: true
}))

// express session
app.use(session({
  secret: SESSION.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: SESSION.AGE
  }
}));

// passportjs
app.use(passport.initialize());
app.use(passport.session())

// client req info
app.use((req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log('Client IP -', ip);
  next();
});

// use routes
app.use(`/v${SERVER.VERSION}`, router);

// not found end-point
app.use((req, res) => {
  res.status(404).json(notFound({
    message: "Endpoint not found"
  }))
})


// error handler for 500
app.use(errorHandler)

// api doc - swagger
const swaggerDocument = yaml.load('./src/swagger.yaml');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// default console log
app.listen({ port: SERVER.PORT }, () => {
  console.log(`\nserver running at \thttp://localhost:${SERVER.PORT}/v${SERVER.VERSION}`);
})




