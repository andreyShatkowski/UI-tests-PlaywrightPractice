const playwright = require("playwright-chromium");

jest.setTimeout(300000);
let browser;

afterAll(async () => {
  await browser.close();
});

describe("UI", () => {
  let page;  
  test("1 Launch brouser > Open page", async () => {
    browser = await playwright.chromium.launch({
      headless: false,
//      slowMo: 500
    });
    page = await browser.newPage();
    await page.goto("https://the-internet.herokuapp.com");
//  await page.close();
  });

test("2-Add/Remove Elements", async()=>{
await page.click('[href="/add_remove_elements/"]');

await page.click('button[onclick="addElement()"]');

await page.waitForSelector(".added-manually");
 //Timeout for Me
await page.waitForTimeout(3000);
//  await page.close();
});

test("3 test", async()=>{
  const context = await browser.newContext({
    httpCredentials: {
      username: 'admin',
      password: 'admin',
    }
  });
  page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/basic_auth');
  //Timeout for Me
  //await page.waitForTimeout(3000);
 //  await page.close();
});

test("4 Checkboxes", async ()=>{
   const context=await browser.newContext();
   page = await context.newPage();
   await page.goto("https://the-internet.herokuapp.com/checkboxes");

   await page.check('#checkboxes > input[type=checkbox]:nth-child(1)');
   await page.uncheck('#checkboxes > input[type=checkbox]:nth-child(3)');

   const result1 = await page.$eval('#checkboxes > input[type=checkbox]:nth-child(1)', el => el.value);
   expect (result1).toEqual('on');
  //Timeout for Me
  //await page.waitForTimeout(3000);
   //  await page.close();
});


test('5 - Digest Autentification', async ()=>{
  const context = await browser.newContext({
    httpCredentials: {
      username: 'admin',
      password: 'admin',
    }
});
  page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/digest_auth');
  //Timeout for Me
  //await page.waitForTimeout(3000);
 //  await page.close();
});

test('6 Dropdown', async()=>{
  const context=await browser.newContext();
  page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/dropdown");
  await page.selectOption('#dropdown','2');
  //Timeout for Me
  //await page.waitForTimeout(3000);
 //  await page.close();
});

test("7 Disabled input", async()=>{
  const context=await browser.newContext();
  page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/dynamic_controls");
  await page.click('#input-example [type="button"]');
  await page.waitForSelector('[type="text"]:not([disabled])');
  //Timeout for Me
  //await page.waitForTimeout(3000);
  //  await page.close();
});

test("8 Login form", async ()=>{
  const context=await browser.newContext();
  page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/login");

  await page.type('#username','tomsmith');
  await page.type('#password','SuperSecretPassword!');
  await page.click('[type="submit"]');
  await page.waitForSelector('[href="/logout"]');
  //Timeout for Me
  //await page.waitForTimeout(3000);
  //  await page.close();
});


test("9 Notification Message", async ()=>{
    page = await browser.newPage();
    await page.goto("https://the-internet.herokuapp.com/notification_message_rendered");
    await page.click('[href="/notification_message"]');
    await page.waitForSelector('#flash');
  //Timeout for Me
  //await page.waitForTimeout(3000);
  //  await page.close();
});

test("10 window", async ()=>{
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/windows');
  await page.click('[href="/windows/new"]');
  
  await context.waitForEvent('page');

  const pages = context.pages();
  const page2 = pages[1];
  await page2.waitForSelector('body>div.example>h3', {timeout: 3000});
  //Timeout for Me
  //await page.waitForTimeout(3000);
  //  await page.close();
});

test("11 Key press", async ()=>{
  await page.goto('https://the-internet.herokuapp.com/key_presses');
  await page.press('body','Shift');
  await page.waitForSelector('#result');
  await page.waitForSelector('text=You entered: SHIFT');
  //Timeout for Me
 // await page.waitForTimeout(3000);
 //  await page.close();
});

});