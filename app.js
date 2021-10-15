const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const staticPath = path.join(__dirname, "../views");
app.set("view engine", "hbs");
// console.log(path.join(__dirname, "../views"));
// app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render("pm");
});
app.get("/contact.html", (req, res) => {
    res.render("contactus");
});
app.get("/aboutus.html", (req, res) => {
    res.render("aboutus");
});
app.get("/login.html", (req, res) => {
    res.render("login");
});

app.listen(port, () =>{
    console.log(`listening the port ${port}`);
});