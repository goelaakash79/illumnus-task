const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const path = require('path');
const app = express();

require("dotenv").config();

// db connection
require("./config/dbconnection");

// configuring middlewares
app.use(cors());
app.use(morgan('tiny'));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

// load schemas
const User = require("./models/User");
const Question = require("./models/Question");
const Quiz = require("./models/Quiz");
const Attempt = require("./models/Attempt");

// Routes
app.use("/api/v1/users", require("./routes/api/v1/users"));
app.use("/api/v1/quiz", require("./routes/api/v1/quiz"));

app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

// intialising the server
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