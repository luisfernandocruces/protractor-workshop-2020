import { $, ElementFinder } from 'protractor';

export class SignInStepPage {

  private email: ElementFinder;
  private password: ElementFinder;
  private loginButton: ElementFinder;

  constructor() {
    this.email = $('#email');
    this.password = $('#passwd');
    this.loginButton = $('#SubmitLogin');
  }

  public async login(): Promise<void> {
    await this.email.sendKeys('aperdomobo@gmail.com');
    await this.password.sendKeys('WorkshopProtractor');
    await this.loginButton.click();
  }
}
