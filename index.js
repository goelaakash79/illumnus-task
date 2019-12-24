const express = require("express");
const app = express();

require("dotenv").config();
require("./config/dbconnection");


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