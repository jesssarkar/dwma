const express = require("express")
const app = express()
const PORT = 8000
const mongoose = require("mongoose") 

const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set("view engine", "ejs")
app.set(express.static("public"))
app.use(express.urlencoded({extended: true}))

app.use('/', homeRoutes )



app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`))
