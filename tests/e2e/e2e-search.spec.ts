import { expect, test } from "@playwright/test";
import { HomePage } from "../../page-objects/HomePage";
import { FeedbackPage } from "../../page-objects/FeedbackPage";
test.describe("Search Results", () => {
  test("Should Find Search Results", async ({ page }) => {
    let homePage: HomePage = new HomePage(page);
    await homePage.visit();
    await homePage.searchFor("bank");

    const numberOfLink = await page.locator("li > a");
    await expect(numberOfLink).toHaveCount(2);
  });
});
