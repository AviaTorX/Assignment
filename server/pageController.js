const pageScraper = require('./pageScraper');
async function scrapeAll(browserInstance, url){
	let browser;
	try{
		browser = await browserInstance;
		await pageScraper.scraper(browser, url);	
		
	}
	catch(error){
		console.error(error.message);
	}
}

module.exports = (browserInstance, url) => scrapeAll(browserInstance, url)
