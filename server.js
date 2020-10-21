const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const dbConnection = require("./config/db");
const cors = require('cors');
dotenv.config({ path: "./config/config.env" });

dbConnection();

const users = require("./routes/auth");

const app = express();


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Mogaka_dev:manyara5766@cluster0.nqohn.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.use("./auth", users);

PORT = process.env.PORT;

app.listen(
    PORT,
    console.log(
        `server running on port ${PORT} in ${process.env.NODE_ENV} mode`.yellow.bold
    )
);