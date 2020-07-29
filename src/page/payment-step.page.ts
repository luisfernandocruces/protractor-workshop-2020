import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {

  private payBankButton: ElementFinder;

  constructor () {
    this.payBankButton = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async clickPayBankButton(): Promise<void> {
    await this.payBankButton.click();
  }
}
