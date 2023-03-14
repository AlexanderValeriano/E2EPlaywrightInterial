import { expect, test } from "@playwright/test";

test.describe("Transfer Funds and make payements", async () => {
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
  test("Transfer Funds", async ({ page }) => {
    await page.click("#transfer_funds_tab");
    await page.selectOption("#tf_fromAccountId", "1");
    await page.selectOption("#tf_toAccountId", "3");
    await page.type("#tf_amount", "500");
    await page.type("#tf_description", "Somme description");
    await page.click("#btn_submit");
    const boardHeader = await page.locator(".board-header");
    await expect(boardHeader).toContainText("Verify");
    await page.click("#btn_submit");
    const succesMessage = await page.locator(".alert.alert-success");
    await expect(succesMessage).toContainText(
      "You successfully submitted your transaction."
    );
  });
});
