import { expect, test } from "@playwright/test";
test.beforeEach(async ({ page }) => {
  await page.goto("/");
});
test("Login Espace adhérent", async ({ page }) => {
  await page.locator("//h3[@class='principal']");
  await page.locator("//label[contains(@for,'devisA1')]");
  console.log(await page.locator("//label[@for='situation1']").textContent());
  await expect(page.locator("//label[@for='situation1']")).toHaveText("Actif");
});
