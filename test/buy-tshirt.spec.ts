import { browser } from 'protractor';
import { MenuContentPage,
          ProductListPage,
          ProducAddedModalPage,
          SummaryStepPage,
          SignInStepPage,
          AddressStepPage,
          ShippingStepPage,
          PaymentStepPage,
          BankPaymentPage,
          OrderSummaryPage,
        } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const producAddedModalPage: ProducAddedModalPage = new ProducAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await productListPage.goToModal();
    await producAddedModalPage.goProceedToCheck();
    await summaryStepPage.toContinueProceedToCheck();

    await signInStepPage.login();

    await addressStepPage.goProceedToCheck();

    await shippingStepPage.acceptTerms();

    await shippingStepPage.clickProceedToCheckButton();
    await paymentStepPage.clickPayBankButton();
    await bankPaymentPage.clickConfirmButton();

    await expect(orderSummaryPage.getOrderTitle())
      .toBe('Your order on My Store is complete.');
  });
});
