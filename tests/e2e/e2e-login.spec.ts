import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://zero.webappsecurity.com/index.html");
  await page.click("#feedback");
});

test("Reset feedback form", async ({ page }) => {
  await page.type("#name", "alexander");
  await page.type("#email", "alexander@gmail.com");
  await page.type("#subject", "some subject");
  await page.type("#comment", "some comment");
  await page.waitForTimeout(2000);
  await page.click("input[value='Clear']");
  const nameInput = await page.locator("#name");
  const commentInput = await page.locator("#comment");
  await expect(nameInput).toBeEmpty();
  await expect(commentInput).toBeEmpty();
});

test("Submit feedback form", async ({ page }) => {
  await page.type("#name", "alexander");
  await page.type("#email", "alexander@gmail.com");
  await page.type("#subject", "some subject");
  await page.type("#comment", "some comment");
  await page.click("input[value='Send Message']");
  await page.waitForSelector("#feedback-title");
  await page.waitForTimeout(2000);
});
