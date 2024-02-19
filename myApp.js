let express = require('express');
let app = express();

require('dotenv').config();

app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req,res) => {
    const message = "Hello World";
    res.json({
        message: process.env.MESSAGE_STYLE == "uppercase" ? message.toUpperCase() : message.toLowerCase()
    })
});


















 module.exports = app;
