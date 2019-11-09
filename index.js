const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var mysql = require('mysql');


const app = express();

var PORT = process.env.PORT || 3000

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.listen(PORT, () => console.log("Server is a\'listenin\'"));

app.get("/", (req, res) => { res.send("<h1 style='text-align: center'>TEST DIS Thing</h1>"); });

var DBPool = mysql.createPool({
  host: "us-cdbr-iron-east-05.cleardb.net",
  user: "b3ce67afce258f",
  password: "8cc3a15a",
  database: "heroku_5e71758d45b2d30"
});

app.get("/firstName", (req, res) => {
  DBPool.query("select name from ChallengeUser where ChallengeUser.id = 1;",  (err, result, fields) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.get("/lastName", (req, res) => {
  DBPool.query("select name from ChallengeUser where ChallengeUser.id = 2;",  (err, result, fields) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.get("/middleName", (req, res) => {
  DBPool.query("select name from ChallengeUser where ChallengeUser.id = 3;",  (err, result, fields) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});