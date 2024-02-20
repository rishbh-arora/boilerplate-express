let express = require('express');
let app = express();

require('dotenv').config();

app.use("/public", express.static(__dirname + "/public"))

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
} 

app.use(logger);

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next()
}, (req, res) => {
    res.json({
        time: req.time
    });
});

app.get("/json", (req,res) => {
    const text = "Hello json";
    const message = process.env.MESSAGE_STYLE == "uppercase" ? text.toUpperCase() : text;
    res.json({
        "message": message
    })
});

 module.exports = app;
