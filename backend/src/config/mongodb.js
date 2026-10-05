const mongoose = require("mongoose")
require("dotenv").config

const ConnectDB = async()=>{
mongoose.connect("mongodb+srv://paliwaladitya298_db_user:6ttndnqEuctuHRrN@cluster0.h69fskw.mongodb.net/User_manager")
}

module.exports = ConnectDB