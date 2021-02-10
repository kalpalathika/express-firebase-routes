import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
// import firedb from '../config/firedb.js'
// import userRoute from './routes/userRoute.js'
import userRoutes from './routes/userRoutes.js'
// import fire from '../config/fire.js';



const app = express();

// admin.initializeApp()

app.use(bodyParser.json({limit: '30mb', extended:true}))
app.use(cors())

//PORT 
const PORT = process.env.PORT || 5000


// test route
app.get('/', (req,res)=> {res.send("hello world")} )



//helper function



//sign up route
app.use('/makestories',userRoutes)

//sign in route

//Server connection
app.listen(PORT,()=> console.log(`Server is running on ${PORT}`))
