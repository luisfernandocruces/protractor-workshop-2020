import { $, ElementFinder } from 'protractor';

export class ProducAddedModalPage{

  private proceedCheckButton: ElementFinder;

  constructor() {
    this.proceedCheckButton = $("a[title='Proceed to checkout']");
  }

  public getProceedCheckButton() {
    return this.proceedCheckButton;
  }

  public async goProceedToCheck() {
    await this.proceedCheckButton.click();
  }
}
