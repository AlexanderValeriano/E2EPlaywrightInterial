import { expect, test } from "@playwright/test";
import { HomePage } from "../../page-objects/HomePage";
import { LoginPage } from "../../page-objects/LoginPage";
import { Navbar } from "../../page-objects/components/Navbar";
import { PaymentPage } from "../../page-objects/components/PaymentPage";

test.describe.only("New Payment", async () => {
  let homePage: HomePage;
  let loginPage: LoginPage;
  let paymentPage: PaymentPage;
  let navbar: Navbar;

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
    paymentPage = new PaymentPage(page);
    navbar = new Navbar(page);

    await navbar.clickOnTab("Pay Bills");
    await paymentPage.createPayment();
    await paymentPage.assertSuccesMessage();
  });
});
