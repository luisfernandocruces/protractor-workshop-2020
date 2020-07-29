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
    await(browser.sleep(3000));
    await productListPage.goToModal();
    await(browser.sleep(3000));
    await producAddedModalPage.goProceedToCheck();
    await(browser.sleep(3000));
    await summaryStepPage.toContinueProceedToCheck();
    await(browser.sleep(3000));

    await signInStepPage.login();
    await(browser.sleep(3000));

    await addressStepPage.goProceedToCheck();
    await(browser.sleep(3000));

    await shippingStepPage.acceptTerms();
    await(browser.sleep(3000));

    await shippingStepPage.clickProceedToCheckButton();
    await(browser.sleep(3000));
    await paymentStepPage.clickPayBankButton();
    await(browser.sleep(3000));
    await bankPaymentPage.clickConfirmButton();
    await(browser.sleep(3000));

    await expect(orderSummaryPage.getOrderTitle())
      .toBe('Your order on My Store is complete.');
  });
});
