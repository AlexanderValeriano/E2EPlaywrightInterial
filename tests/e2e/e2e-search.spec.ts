import { expect, test } from "@playwright/test";
test.describe("Search Results", () => {
  test("Should Find Search Results", async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/index.html");
    await page.type("#searchTerm", "bank");
    await page.keyboard.press("Enter");
    const numberOfLink = await page.locator("li > a");
    await expect(numberOfLink).toHaveCount(2);
  });
});
