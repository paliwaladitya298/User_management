const mongoose = require("mongoose")
require("dotenv").config

const ConnectDB = async()=>{
mongoose.connect(process.env.mogodbkey)
}

module.exports = ConnectDB
