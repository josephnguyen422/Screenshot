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









   
/* try{
        const options = {
            path: 'images/screenshot'+i+'.png', /*Saves the images at this locaiton and adds a number to the name of each screenshot 
            fullPage: true,
        };
        const url = textArray[i];    
        await page.goto(url); /*Go to the website on the list in the txt file 
        await page.screenshot(options); /*Take a screenshot using your settings 
        }catch(e){
            console.log("this aint happening");
        } 
        
    */








/*it seems during the pageScreenshot function the getNum function is called so link 4 is screenshoted but it dosen't exit */
/*due to async function nature and how we have to wait for browser to load  */

