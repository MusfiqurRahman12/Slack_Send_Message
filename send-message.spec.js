const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://slack.com/signin');
  await page.fill('email', process.env.email);
  await page.fill('password', process.env.password);
  await page.click('signin_btn');
  await page.goto('https://your-workspace.slack.com/messages/general');
  await page.fill('[data-qa="message_input"]', 'Hello from Playwright!');
  await page.press('[data-qa="message_input"]', 'Enter');
  console.log('Message sent!');
  await browser.close();
})();
