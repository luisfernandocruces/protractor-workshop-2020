import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private confirmButton: ElementFinder;

  constructor () {
    this.confirmButton = $('#cart_navigation > button');
  }

  public async clickConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
