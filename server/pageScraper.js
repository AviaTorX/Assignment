const pool = require("./db");
async function insertEntries(data, filetype) {
    await Promise.all(data.map(async (item) => {
        await pool.query("INSERT INTO media (url, filetype) VALUES ($1, $2)", [item, filetype]);
    }))
}
const scraperObject = {
    async scraper(browser, url){
        let page = await browser.newPage();
		console.log(`Navigating to ${url}...`);
		// Navigate to the selected page
		await page.goto(url);

        const images = await page.evaluate(() => Array.from(document.images, e => e.src));
        const videos = await page.evaluate(() => Array.from(document.querySelectorAll('video')).map(el => el.src));
        
        insertEntries(images, 'image');
        insertEntries(videos, 'video');
        console.log("DOne");
    }
}

module.exports = scraperObject;

