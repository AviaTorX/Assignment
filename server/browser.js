const puppeteer = require('puppeteer');

async function startBrowser(){
	let browser;
	try {
	    console.log("Opening the browser......");
	    browser = await puppeteer.launch({
	        headless: true,
	        args: ['--no-sandbox'],
	        'ignoreHTTPSErrors': true
	    });
	} catch (error) {
	    console.error(error.message);
	}
	return browser;
}

module.exports = {
	startBrowser
};
