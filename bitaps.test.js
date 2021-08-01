const playwright = require("playwright-chromium");

  jest.setTimeout(600000);
  let browser;
  
  afterAll(async () => {
    await browser.close();
  });
  
  describe("UI", () => {
    let page; 
    test("0 Launch brouser > Open page", async () => {
      browser = await playwright.chromium.launch({
        headless: false,
          slowMo: 200
      });
      const context=await browser.newContext();
      page = await context.newPage();
      await page.goto("https://bitaps.com");
    });

    test("1 Change 'moon button'", async ()=>{
        const context=await browser.newContext();
        page = await context.newPage();
        await page.goto("https://bitaps.com");
        await page.click('.moon');
        //Timeout for Me
        //await page.waitForTimeout(1000);
        });

    test("2 Search in menu", async ()=>{
        const context=await browser.newContext();  
        page = await context.newPage();
        await page.goto("https://bitaps.com");
        await page.fill('[id="search-box"]', 'HitBTC')
        await page.click('.fa-search')
         //Timeout for Me
         //await page.waitForTimeout(1000);
    });
    
    test("3 Change dropdown", async ()=>{
        const context=await browser.newContext();  
        page = await context.newPage();
        await page.goto("https://bitaps.com");
        await page.click('.fa-lg')
        await page.click('.ethereum-logo-gray');
        //Timeout for Me
        //await page.waitForTimeout(1000);
    });

    test("4 Check hamburger menu", async ()=>{
        const context=await browser.newContext();  
        page = await context.newPage();
        await page.goto("https://bitaps.com");
        await page.click('#rmenu');
        await page.click('[href="/address"]');
        //Timeout for Me
        //await page.waitForTimeout(1000);
    });

    test("5 Social nets", async ()=>{
        const context=await browser.newContext();  
        page = await context.newPage();
        await page.goto("https://bitaps.com");
        await page.click('[href="https://t.me/bitapscom"]');
        //Timeout for Me
        //await page.waitForTimeout(1000);
    });
    
  });


