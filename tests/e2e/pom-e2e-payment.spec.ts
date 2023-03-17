import { expect, test } from "@playwright/test";
import { HomePage } from "../../page-objects/HomePage";
import { LoginPage } from "../../page-objects/LoginPage";

test.describe.only("New Payment", async () => {
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

  test("Should send new payment", async ({ page }) => {
    await page.click("#pay_bills_tab");
    await page.selectOption("#sp_payee", "apple");
    await page.click("#sp_get_payee_details");
    await page.waitForSelector("#sp_payee_details");
    await page.selectOption("#sp_account", "6");
    await page.type("#sp_amount", "1000");
    await page.type("#sp_date", "2023-03-14");
    await page.type("#sp_description", "First Payement");
    await page.click("#pay_saved_payees");
    const message = await page.locator("#alert_content > span");
    await expect(message).toBeVisible({ visible: true });
    await expect(message).toContainText(
      "The payment was successfully submitted."
    );
  });
});
