const express = require("express");
const urlRoute = require("./routes/url");
const mongoDbConnection = require("./connection")
const app = express();
PORT = 4001;


mongoDbConnection("mongodb://127.0.0.1:27017/short-url")
.then(() => console.log("connected to mongoDB"))
.catch(err => console.log("Error", err))

app.use(express.json({extended: true}))


app.use("/url", urlRoute);


app.listen(PORT, ()=> console.log( `server runnung on port ${PORT}`));