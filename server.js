const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();

// Public folder serve කරන්න
app.use(express.static(path.join(__dirname, "public")));

// Handlebars setup
app.engine("hbs", exphbs.engine({ 
    extname: ".hbs", 
    defaultLayout: "main" 
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Home Page Route
app.get("/", (req, res) => {
    res.render("home", { title: "Home Page", message: "Welcome to My HBS App!" });
});

// About Page Route
app.get("/about", (req, res) => {
    res.render("about", { title: "About Us", message: "We are a simple HBS app." });
});

// Server Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
