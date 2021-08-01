const playwright = require("playwright-chromium");

jest.setTimeout(100000);
let browser;

afterAll(async () => {
  await browser.close();
});

describe("Suite", () => {
    test('iFrame', async () => {
    browser = await playwright.chromium.launch({headless: false, 
    slowMo: 200
     });
        const context=await browser.newContext();
        page = await context.newPage();
        await page.goto("https://www.w3schools.com/html/html_iframe.asp");
        const frames = await page.frames();
        const frame = frames[1];
        await frame.waitForSelector('iframe');
        await page.click('[href="/default.asp"]');
     //Timeout for Me
        await page.waitForTimeout(1000);
    //  await page.waitForEvent;
    });

});   