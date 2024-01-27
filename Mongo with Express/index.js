const express = require('express');
const app = express();
const port = 8080;
const path = require('path')

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.render("index.ejs")
})
