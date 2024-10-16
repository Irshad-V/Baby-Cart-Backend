const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes/index.js')
const cookieParser = require('cookie-parser')
const allUsers = require('./controller/user/allUsers.js')

const app = express()
app.use(cookieParser());

app.use(express.json())

app.use(cors())


app.use("/api", router)
app.get("/", (req, res) => {
    return res.json({ working: "ok" })
})
app.get("/all", allUsers)
const PORT = 8080 || process.env.PORT

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("connnect to DB")
        console.log("Server is running " + PORT)
    })
})       