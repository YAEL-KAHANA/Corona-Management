const express = require("express");   //imports the express depandancy.
const cors = require("cors");   //safe communication.

require("dotenv").config();   //encoding function.

const app = express();   //initialize the app, creates the express server.
app.use(cors());   //safe interaction.
app.use(express.json());   //enables sending json projects to the client.
app.use(express.urlencoded( {extended: true}));   //enables getting data from URL



app.listen(4000,()=> console.log("listening on port 4000"));