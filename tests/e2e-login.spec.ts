import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://zero.webappsecurity.com/index.html");
  await page.click("#signin_button");
});

//Negative Scenario
test("Negative Scenario for login", async ({ page }) => {
  await page.type("#user_login", "username1");
  await page.type("#user_password", "password1");
  await page.click("text=Sign In");
  const errorMessage = await page.locator(".alert.alert-error");
  await expect(errorMessage).toBeVisible({ visible: true });
});
//Positive Scenario + Logout
test("Positive Scenario with logout", async ({ page }) => {
  await page.type("#user_login", "username");
  await page.type("#user_password", "password");
  await page.click("text=Sign In");
  await page.goto("http://zero.webappsecurity.com/bank/transfer-funds.html");
  await page.waitForTimeout(2000);
  const accountSummaryTab = await page.locator("#account_summary_tab");
  await expect(accountSummaryTab).toBeVisible({ visible: true });
  await page.goto("http://zero.webappsecurity.com/index.html");
  await expect(page).toHaveURL("http://zero.webappsecurity.com/index.html");
});
