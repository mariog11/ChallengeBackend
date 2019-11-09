const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var mysql = require('mysql');
var fs = require('fs');

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

// var db_host = null;
// var db_user = null;
// var db_pw = null;
// var db_name = null;

// fs.readFile('creds.json', (err, data) => {
//     data = JSON.parse(data);
//     db_host = data.host;
//     db_user = data.user;
//     db_pw = data.pw;
//     db_name = data.db;
// });

var DBPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME
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