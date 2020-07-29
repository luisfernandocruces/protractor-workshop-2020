import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {

  private continueProceedToCheck: ElementFinder;

  constructor () {
    this.continueProceedToCheck = $('.cart_navigation span');
  }

  public async toContinueProceedToCheck(): Promise<void> {
    await this.continueProceedToCheck.click();
  }

}
