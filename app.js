const puppeteer = require('puppeteer');

(async ()=> {

const browser = await puppeteer.launch();
const page = await browser.newPage(); /*opens browser*/
await page.goto('https://www.ebay.com/');
await page.screenshot({ path: 'screenshot.png'})
await browser.close();
})();
