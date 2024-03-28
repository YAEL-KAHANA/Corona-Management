const express = require("express");   //imports the express depandancy.
const cors = require("cors");   //safe communication.
const dbConfig = require('./config/dbConfig');   //imports the DB contact function.
const searchRoute = require("./routes/searchRoute");

require("dotenv").config();   //encoding function.

const app = express();   //initialize the app, creates the express server.
app.use(cors());   //safe interaction.
app.use(express.json());   //enables sending json projects to the client.

const dbURI = process.env.MONGODB_CONNECT_STR;
dbConfig(dbURI);

app.use(express.urlencoded( {extended: true}));   //enables getting data from URL.
app.use('/search', searchRoute);
app.use('/', searchRoute)

app.listen(4000,()=> console.log("listening on port 4000"));