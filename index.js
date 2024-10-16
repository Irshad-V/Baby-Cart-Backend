const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes/index')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser());

app.use(express.json())
app.use(cors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}))


app.use("/api", router)
 app.get("/",(req,res)=>{
    return res.json({working : "ok"})
 })
const PORT = 8080 || process.env.PORT

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("connnect to DB")
        console.log("Server is running " + PORT)
    })
})       