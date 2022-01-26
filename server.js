const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

// middleware:
app.set("view engine", "ejs");
// --> EJS: a templating language that lets you generate HTML markup 
// with plain JavaScript

app.get("/", (req, res) => {    
    //we're able to use res.render because of the template engine
    //choosing an ejs file we want to render
    //Node will look in the view folder for this file
    return res.render("index")
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
