import express from 'express';
import dotenv from 'dotenv'
import router from './routes';



const app = express();
const PORT = process.env.PORT || 1000

dotenv.config()

// use routes
app.use('/', router);

// default console log
app.listen({ port: PORT }, () => {
  console.log(`\nserver running at \thttp://localhost:${PORT}`);
})




