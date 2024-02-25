const { chromium } = require("playwright");

const url = "https://bot.incolumitas.com/";

const main = async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(url);

  await page.screenshot({
    fullPage: true,
    path: "./results-image/playwright.png",
  });

  const test = await page.$eval("*", (el) => el.innerText);

  console.log(test);

  await browser.close();
};

(async () => {
  await main();
})();
