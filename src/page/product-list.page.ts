import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private addToCarButton: ElementFinder;

  constructor () {
    this.addToCarButton = $("a[title='Add to cart']");
  }

  public getAddToCarButton() {
    return this.addToCarButton;
  }

  public async goToModal(): Promise<void> {
    await this.addToCarButton.click();
  }
}
