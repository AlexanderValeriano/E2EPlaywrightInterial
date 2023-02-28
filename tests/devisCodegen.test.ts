import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://devis.interiale.fr/");
  await page
    .getByRole("button", { name: "Tout accepter et continuer" })
    .click();
  await page.getByText("Actif").click();
  await page
    .locator(
      'select[name="_interialeTunnelsDevisPortlet_INSTANCE_UtEHvNWyxarN_q1"]'
    )
    .selectOption("13F75");
  await page.waitForTimeout(1000);
  await page
    .locator(
      "//div[@class='form-row p-2 pb-3 rounded']//span[@class='input-group-text']"
    )
    .click();
  await page.getByRole("cell", { name: "«" }).click();
  await page.waitForTimeout(1000);

  await page.getByRole("cell", { name: "«" }).click();
  await page.waitForTimeout(1000);

  await page.getByText("1983").click();
  await page.waitForTimeout(1000);

  await page.getByText("oct.").click();
  await page.waitForTimeout(1000);

  await page
    .getByRole("row", { name: "24 25 26 27 28 29 30" })
    .getByRole("cell", { name: "28" })
    .click();
  await page.getByPlaceholder("Salaire mensuel brut").click();
  await page.waitForTimeout(1000);

  await page.getByPlaceholder("Salaire mensuel brut").fill("2000");
  await page.waitForTimeout(1000);

  await page.getByPlaceholder("Primes et indemnités brut").click();
  await page.waitForTimeout(1000);

  await page.getByPlaceholder("Primes et indemnités brut").fill("500");
  await page.waitForTimeout(1000);

  await page
    .locator(
      '[id="_interialeTunnelsDevisPortlet_INSTANCE_UtEHvNWyxarN_autresprimes"]'
    )
    .click();
  await page
    .locator(
      '[id="_interialeTunnelsDevisPortlet_INSTANCE_UtEHvNWyxarN_adhesionRia"]'
    )
    .getByText("Oui")
    .click();
  await page
    .locator(
      '[id="_interialeTunnelsDevisPortlet_INSTANCE_UtEHvNWyxarN_diffDate"]'
    )
    .getByText("Oui")
    .click();
});
