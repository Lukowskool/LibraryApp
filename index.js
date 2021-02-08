const express = require("express"),
    path = require("path")

const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())