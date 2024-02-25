const puppeteer = require("puppeteer");

const url = "https://bot.incolumitas.com/";

const main = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(url);

  await page.screenshot({
    fullPage: true,
    path: "./results-image/puppeteer.png",
  });

  const test = await page.$eval("*", (el) => el.innerText);

  console.log(test);

  await browser.close();
};

(async () => {
  await main();
})();
