const express = require("express")
const app = express()
const PORT = 8000
const mongoose = require("mongoose") 





app.set("view engine", "ejs")
app.set(express.static("public"))
app.use(express.urlencoded({extended: true}))





app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`))
