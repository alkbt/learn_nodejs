var express = require("express"),
    mongoose = require("mongoose"),
    app = express();

app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/test");

var Records = mongoose.model("Record", {
    title: String,
    message: String
});

app.get("/", function (req, res) {
    Records.find({}, function (err, records) {
        if (err) {
            console.log("Records.find error " + err);
            return;
        }

        res.render("main", {records: records});
    });
});

app.listen(3000, () => {
    console.log("Learn Node.js Application has started");
});