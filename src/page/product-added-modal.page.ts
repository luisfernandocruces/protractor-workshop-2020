import { $, ElementFinder } from 'protractor';

export class ProducAddedModalPage{

  private proceedCheckButton: ElementFinder;

  constructor() {
    this.proceedCheckButton = $('[style*="display: block;"] .button-container > a');
  }

  public getProceedCheckButton() {
    return this.proceedCheckButton;
  }

  public async goProceedToCheck() {
    await this.proceedCheckButton.click();
  }
}
