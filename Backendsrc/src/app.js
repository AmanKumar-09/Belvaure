import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors';

const app = express();

 app.use(cors({
    origin:process.env.CORS_ORIGIN ,
    credientials:true
 }))


 app.use(express.json({limit:"16kb"}));
 app.use(cookieParser());
 app.use(express.static("public"))
 app.use(express.urlencoded({extended:true,limit:"16kb"}));
  
import router from './routes/user.route.js';


app.use('/api/v1/users/',router)

 export {app}