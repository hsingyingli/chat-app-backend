import 'dotenv/config';
import mongoose from 'mongoose';
import express from "express";

import userRoute from './routes/user'

const app = express()
const databaseUrl =  process.env.MONGODB_URL || ""
const PORT = process.env.SERVER_PORT 

app.use(express.json())
app.use('/user', userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

mongoose.connect(databaseUrl, ()=> {
  console.log('DB is connected')
})






