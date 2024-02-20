let express = require('express');
let app = express();

require('dotenv').config();

app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req,res) => {
    const text = "Hello json";
    console.log(process.env.MESSAGE_STYLE);
    const message = process.env.MESSAGE_STYLE == "uppercase" ? text.toUpperCase() : text;
    res.json({
        "message": message
    })
});


















 module.exports = app;
