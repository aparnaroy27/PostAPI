var express = require("express");
var app = express(); // Change variable name to 'app'

app.listen(3000, () => {
    console.log("listening to port number 3000"); // Corrected port number in log message
});

app.use(express.json());

app.get("/home", (req, res) => {
    res.sendFile("index.html", { root: __dirname });
});

app.post("/contact", (req, res) => {
    console.log(req.body);
});
