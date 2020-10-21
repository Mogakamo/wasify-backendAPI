const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const dbConnection = require("./config/db");
const cors = require('cors');
dotenv.config({ path: "./config/config.env" });

dbConnection();

const users = require("./routes/auth");

const app = express();

app.use("./auth", users);

PORT = process.env.PORT;

app.listen(
    PORT,
    console.log(
        `server running on port ${PORT} in ${process.env.NODE_ENV} mode`.yellow.bold
    )
);