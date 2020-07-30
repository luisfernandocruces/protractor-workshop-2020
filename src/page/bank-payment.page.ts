import { by, element, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private confirmButton: ElementFinder;

  constructor () {
    this.confirmButton = element(by.partialButtonText('I confirm my order'));
  }

  public async clickConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
