const puppeteer = require('puppeteer');
var fs = require('fs'); /*needed to read txt files */



(async () =>{
    const text = fs.readFileSync("./List.txt").toString();
    const textArray= text.split("\r\n");
    console.log(textArray,textArray.length);
    


    for (let i = 0; i < textArray.length; i++){
      
        const urls = textArray[i];
        console.log(textArray[i], " ",  i);
        const browser = await puppeteer.launch();
        const page = await browser.newPage(); /*opens browser*/   
        await page.goto(`${urls}`); /*Go to the website on the list in the txt file*/ 
        await page.screenshot({path: 'images/screenshot '+i+'.png', fullPage:true}); /*Take a screenshot using your settings */
        await browser.close();   
        


}

})();


