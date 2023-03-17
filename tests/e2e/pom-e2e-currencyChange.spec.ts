import { expect, test } from "@playwright/test";
import { HomePage } from "../../page-objects/HomePage";
import { LoginPage } from "../../page-objects/LoginPage";

test.describe("Currency Exchange Form", async () => {
  let homePage: HomePage;
  let loginPage: LoginPage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);

    await homePage.visit();
    await homePage.clickOnSignIn();
    await loginPage.login("username", "password");
    await page.goto("http://zero.webappsecurity.com/bank/transfer-funds.html");
    const accountSummaryTab = await page.locator("#account_summary_tab");
    await expect(accountSummaryTab).toBeVisible({ visible: true });
  });

  test("Should Make Currency Change", async ({ page }) => {
    await page.click("#pay_bills_tab");
    await page.click("a[href='#ui-tabs-3']");
    await page.selectOption("#pc_currency", "EUR");
    await page.waitForSelector("#sp_sell_rate");

    const sellRate = await page.locator("#sp_sell_rate");
    await expect(sellRate).toBeVisible({ visible: true });
    await page.type("#pc_amount", "1000");
    await page.getByLabel("U.S. dollar (USD)").check();
    await page.waitForTimeout(2000);
    await page.click("#pc_calculate_costs");

    const convertionAmount = await page.locator("#pc_conversion_amount");
    await expect(convertionAmount).toBeVisible({ visible: true });
    await page.click("#purchase_cash");
    const message = await page.locator("#alert_content");
    await expect(message).toBeVisible({ visible: true });
    await expect(message).toContainText(
      "Foreign currency cash was successfully purchased."
    );
  });
});
