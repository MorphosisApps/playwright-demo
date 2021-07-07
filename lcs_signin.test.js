require("dotenv").config();

const { firefox } = require("playwright");

test("success", () => {
  (async () => {
    const browser = await firefox.launch({ headless: false, slowMo: 50 });
    const page = await browser.newPage();
    await page.goto("https://ringzero.testrail.net/index.php?/auth/login");
    await page.fill("#name", process.env.NAME);
    await page.fill("#password", process.env.PASS);
    await page.click("#button_primary");
    expect(page.url()).toBe(
      "https://ringzero.testrail.net/index.php?/dashboard"
    );
    await browser.close();
  })();
});
