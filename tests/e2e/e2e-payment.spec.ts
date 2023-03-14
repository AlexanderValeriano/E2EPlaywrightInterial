import { expect, test } from "@playwright/test";

test.describe.only("Filter transactions", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/index.html");
    await page.click("#signin_button");
    await page.type("#user_login", "username");
    await page.type("#user_password", "password");
    await page.click("text=Sign In");
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
