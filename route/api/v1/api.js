const express = require('express');
const app = express.Router();

app.get("/", (req, res) => {
    res.send({
        "error": "bad request"
    }).status(404);
});


app.get("donates/", (req, res) => {});


// app.get("/", (req, res) => {});
// app.get("/", (req, res) => {});
// app.get("/", (req, res) => {});
// app.get("/", (req, res) => {});
// app.get("/", (req, res) => {});
// app.get("/", (req, res) => {});
// app.get("/", (req, res) => {});
// app.get("/", (req, res) => {});
// app.get("/", (req, res) => {});
// app.get("/", (req, res) => {});
// app.get("/", (req, res) => {});
// app.get("/", (req, res) => {});
// app.get("/", (req, res) => {});
// app.get("/", (req, res) => {});
// app.get("/", (req, res) => {});

module.exports = app;