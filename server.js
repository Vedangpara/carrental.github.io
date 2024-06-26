//Server side code
var express = require("express");
var mong = require("mongodb").MongoClient;
var cors = require("cors");
var bp = require("body-parser");

var app = express();
app.use(cors());
app.use(bp.json());
var url = "mongodb://127.0.0.1:27017/";

app.post("/insert", function (req, res) {
  mong.connect(url, function (err, db) {
    var dat = {
      empno: req.body.empno,
      empname: req.body.empname,
      dept: req.body.dept,
    };
    if (err) throw err;
    var dbo = db.db("practice");
    dbo.collection("employee").insertOne(dat, function (err, recs) {
      if (err) throw err;
      console.log('rec with ${recs.insertedId} inseeted');
      db.close();
    });
  });
});

app.get("/fetchrecs", function (req, res) {
  mong.connect(url, function (err, db) {
    //  var dat={empno:req.body.empno,empname:req.body.empname,dept:req.body.dept}
    if (err) throw err;
    var dbo = db.db("practice");
    dbo
      .collection("employee")
      .find()
      .toArray(function (err, recs) {
        if (err) throw err;
        res.send(recs);
        db.close();
      });
  });
});

//this is to get the records based on parameter -same as above with just one change as  indicated

app.get("/fetchrecsparam", function (req, res) {
  mong.connect(url, function (err, db) {
    //  var dat={empno:req.body.empno,empname:req.body.empname,dept:req.body.dept}
    if (err) throw err;
    var dbo = db.db("practice");
    dbo
      .collection("employee")
      .find({ dept: req.query.dept })
      .toArray(function (err, recs) {
        if (err) throw err;
        res.send(recs);
        db.close();
      });
  });
});
app.listen(5000, () => {
  console.log("listening...");
});