const express = require('express')
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/dist"));

// rerouting to the index file
app.get(/.*/, function (req, res) {
  res.send(__dirname + "/dist/index.html")
});

app.listen(port);

console.log("Server started...")
