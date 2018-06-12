var express = require("express"),
    app = express();

app.get("/", function (req, res) {
    res.send("Hello, World!");
});

app.listen(3000, () => {
    console.log("Learn Node.js Application has started");
});