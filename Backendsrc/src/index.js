   
import { app } from './app.js';
import dotenv from 'dotenv'
import {connectdb} from './db/index.js'

dotenv.config({
    path:'./.env'
})



app.get('/login',(req,res) =>{
    res.send("hello my name is pourush")
})



connectdb()
.then(()=>{
    app.listen(process.env.PORT || 5000,() =>{
        console.log(`app is listening on ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log('error happend on listening: ',error);
})