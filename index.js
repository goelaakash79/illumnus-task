const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

require("dotenv").config();
require("./config/dbconnection");
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

startServer = async () => {
    try {
        await app.listen(process.env.PORT);
        console.log("Server is up and running");
    }
    catch(err) {
        console.log("Error occurred while intialising the server.");
    }
}

startServer();