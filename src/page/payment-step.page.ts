import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {

  private payBankButton: ElementFinder;

  constructor () {
    this.payBankButton = $('a[title="Pay by bank wire"]');
  }

  public async clickPayBankButton(): Promise<void> {
    await this.payBankButton.click();
  }
}
