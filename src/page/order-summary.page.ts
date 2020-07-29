import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private cartNavigationButton: ElementFinder;

  constructor () {
    this.cartNavigationButton = $('#center_column > div > p > strong');
  }

  public async getTextOfSelector(): Promise<string> {
    return this.cartNavigationButton.getText();
  }
}
