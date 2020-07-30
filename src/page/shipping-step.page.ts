import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private termsOfServiceCheckbox: ElementFinder;
  private proceedToCheckButton: ElementFinder;

  constructor () {
    this.termsOfServiceCheckbox = $('#cgv');
    this.proceedToCheckButton = $('[name="processCarrier"]');
  }

  public async acceptTerms (): Promise<void> {
    await this.termsOfServiceCheckbox.click();
  }

  public async clickProceedToCheckButton(): Promise<void> {
    await this.proceedToCheckButton.click();
  }
}
