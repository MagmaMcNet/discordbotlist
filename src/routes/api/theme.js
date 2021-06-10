const { Router } = require("express");

const route = Router();

route.get("/", async (req, res) => {
    let theme = req.cookies["theme"]
    if (theme === "light") 
        res.cookie("theme", "dark")
    else if (theme === "dark")
    res.cookie("theme", "darken")
    else
        res.cookie("theme", "light");
    res.redirect(req.header('Referer') || '/');
});

module.exports = route;
