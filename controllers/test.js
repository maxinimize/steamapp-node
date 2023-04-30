const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set the user agent to mimic a real browser
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3');
  
  // Navigate to the SSR website
  await page.goto('https://example.com');

  // Wait for the page to render
  await page.waitForSelector('#app');

  // Extract the data you need from the website
  const title = await page.title();
  const body = await page.$eval('#app', element => element.textContent);
  
  console.log(title);
  console.log(body);

  await browser.close();
})();

// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
  
//   // Set the user agent to mimic a real browser
//   await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3');
  
//   // Navigate to the Cloudflare-protected website
//   await page.goto('https://example.com');

//   // Wait for the page to load and handle any JavaScript challenges
//   await page.waitForNavigation({ waitUntil: 'networkidle0' });

//   // Extract the data you need from the website
//   const title = await page.title();
//   const body = await page.$eval('body', element => element.textContent);
  
//   console.log(title);
//   console.log(body);

//   await browser.close();
// })();