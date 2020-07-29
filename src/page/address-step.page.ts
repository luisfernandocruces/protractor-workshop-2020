import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private proceedToCheck: ElementFinder;

  constructor () {
    this.proceedToCheck = $('#center_column > form > p > button > span');
  }

  public async goProceedToCheck(): Promise<void> {
    await this.proceedToCheck.click();
  }
}
