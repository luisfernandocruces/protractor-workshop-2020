import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private proceedToCheck: ElementFinder;

  constructor () {
    this.proceedToCheck = $('[name="processAddress"]');
  }

  public async goProceedToCheck(): Promise<void> {
    await this.proceedToCheck.click();
  }
}
