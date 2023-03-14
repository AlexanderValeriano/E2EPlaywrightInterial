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
  test("Currency Change", async ({ page }) => {
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
