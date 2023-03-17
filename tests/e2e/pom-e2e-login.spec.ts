import { expect, test } from "@playwright/test";
import { LoginPage } from "../../page-objects/LoginPage";
import { HomePage } from "../../page-objects/HomePage";

test.describe.parallel("Login Logout flow", () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  //test before hook
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    await homePage.visit();
  });

  //Negative Scenario
  test("POM Negative Scenario for login", async ({ page }) => {
    await homePage.clickOnSignIn();
    await loginPage.login("invalid username", "invalid password");
    await loginPage.wait(3000);
    await loginPage.assertErrorMessage();
  });
  //Positive Scenario + Logout
  test("POM Positive Scenario with logout", async ({ page }) => {
    await homePage.clickOnSignIn();
    await loginPage.login("username", "password");
    await page.goto("http://zero.webappsecurity.com/bank/transfer-funds.html");
    await page.waitForTimeout(2000);
    const accountSummaryTab = await page.locator("#account_summary_tab");
    await expect(accountSummaryTab).toBeVisible({ visible: true });
    await page.goto("http://zero.webappsecurity.com/index.html");
    await expect(page).toHaveURL("http://zero.webappsecurity.com/index.html");
  });
});
