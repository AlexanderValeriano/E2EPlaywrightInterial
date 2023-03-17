import { expect, Locator, Page } from "@playwright/test";

export class PaymentPage {
  readonly page: Page;
  readonly payeSelectbox: Locator;
  readonly payeDetailButton: Locator;
  readonly payeDetail: Locator;
  readonly accountSelectbox: Locator;
  readonly amountInput: Locator;
  readonly dateInput: Locator;
  readonly descriptionInput: Locator;
  readonly submitPayementButton: Locator;
  readonly message: Locator;

  constructor(page: Page) {
    this.page = page;
    this.payeSelectbox = page.locator("#sp_payee");
    this.payeDetailButton = page.locator("#sp_get_payee_details");
    this.payeDetail = page.locator("#sp_payee_details");
    this.accountSelectbox = page.locator("#sp_account");
    this.amountInput = page.locator("#sp_amount");
    this.dateInput = page.locator("#sp_date");
    this.descriptionInput = page.locator("#sp_description");
    this.submitPayementButton = page.locator("#pay_saved_payees");
    this.message = page.locator("#alert_content > span");
  }

  async createPayment() {
    await this.payeSelectbox.selectOption("apple");
    await this.payeDetailButton.click();
    await expect(this.payeDetail).toBeVisible({ visible: true });
    await this.accountSelectbox.selectOption("6");
    await this.amountInput.type("1000");
    await this.dateInput.type("2023-03-14");
    await this.descriptionInput.type("First Payement");
    await this.submitPayementButton.click();
  }

  async assertSuccesMessage() {
    await expect(this.message).toBeVisible({ visible: true });
    await expect(this.message).toContainText(
      "The payment was successfully submitted."
    );
  }
}
