import { test, Locator, Page, expect } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly signInButton: Locator;
  readonly searchInput: Locator;
  readonly linkFeedback: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInButton = page.locator("#signin_button");
    this.searchInput = page.locator("#searchTerm");
    this.linkFeedback = page.locator("#feedback");
  }
  async visit() {
    await this.page.goto("http://zero.webappsecurity.com/index.html");
  }
  async clickOnSignIn() {
    await this.signInButton.click();
  }
  async clickOnFeedbackLink() {
    await this.linkFeedback.click();
  }
  async searchFor(phrase: string) {
    await this.searchInput.type(phrase);
    await this.page.keyboard.press("Enter");
  }
}
