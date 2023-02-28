import { expect, test } from "@playwright/test";
test.beforeEach(async ({ page }) => {
  await page.goto("/");
});
test("Login Espace adhérent", async ({ page }) => {
  await page
    .getByRole("button", { name: "Tout accepter et continuer" })
    .click();
  await page.locator("//h3[@class='principal']");
  await page.locator("//label[contains(@for,'devisA1')]");
  console.log(await page.locator("//label[@for='situation1']").textContent());
  await expect(page.locator("//label[@for='situation1']")).toHaveText("Actif");
  await page.locator("//label[@for='situation1']").click();
  await page.waitForTimeout(2000);
  await page.fill("#devisA5", "2000");
  await page.waitForTimeout(2000);
  await page.fill("#devisA5bis", "500");
  await page.waitForTimeout(2000);
});
