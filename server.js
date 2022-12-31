import express from 'express'
import notFoundMiddleware from './middlewares/not-found.js'
import errorHandler from './middlewares/errorHandler.js'
import dotenv from 'dotenv'


const app = express()
dotenv.config()


app.get('/', (req,res)=>{
    
    res.json({"message":"You have reached home page of JObify site"})
})



app.use(notFoundMiddleware)
app.use(errorHandler)

const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`server has started on port ${port}...`)
})