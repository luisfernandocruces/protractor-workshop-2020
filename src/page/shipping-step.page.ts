import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private checkInputShipping: ElementFinder;
  private proceedToCheckButton: ElementFinder;

  constructor () {
    this.checkInputShipping = $('#cgv');
    this.proceedToCheckButton = $('#form > p > button > span');
  }

  public async checkInputConditions(): Promise<void> {
    await this.checkInputShipping.click();
  }

  public async clickProceedToCheckButton(): Promise<void> {
    await this.proceedToCheckButton.click();
  }
}
