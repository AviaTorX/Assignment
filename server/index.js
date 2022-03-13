const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const browserObject = require("./browser");
const scraperController = require("./pageController");

//middleware
app.use(cors());
app.use(express.json());

//Routes
app.post("/urls", async (req, res) => {
    try {
        let {urls} = req.body;
        // console.log(req);
        urls = urls.split(",")
        console.log(urls);
        let browserInstance = browserObject.startBrowser();
        urls.forEach(element => {
            scraperController(browserInstance, element);
        });
        res.json({"status":"success"});
    } catch (error) {
        console.error(error.message);
    }
})

// get list of medias from DB
app.get("/urls", async (req, res) => {
    try {
        const mediaList = await pool.query("SELECT * from media");
        res.json(mediaList.rows);
    } catch (error) {
        console.error(error.message);
    }
})
const execute = async () => {
    await pool.query("CREATE TABLE IF NOT EXISTS media (media_id SERIAL PRIMARY KEY,url VARCHAR(2048),filetype VARCHAR(6))");
}
//server
app.listen(5000, () => {
    execute();
    console.log("server has started on port 5000");
})