const mongoose = require("mongoose");

mongoose.set('strictQuery', false);   //disables to send values that unmatched to the scema's definitions.

//contact the DB.
const dbConfig = (uri)=>{
    mongoose.connect(uri)
    .then(()=>console.log('Database Engaged'))
    .catch((error)=> console.log(error))   //informing the client that the server connected to the DB or sending error massage in case of error.
}

const connection = mongoose.connection;   
connection.once("open", ()=> console.log("Database Available"));
 
module.exports = dbConfig;   //first, checks in line 13 if available, and if so, sends the dbConfig.
