import { BasePage } from "./BasePage.js";

export class LeftMainPage extends BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);

    this.cydeoImageAtLeftWindow = page.locator(
      ".details-footer img[src='assets/images/logo.svg']"
    );

    this.secureCheckout = page.locator(".checkout-title");

    this.footerElements = page.locator(".details-footer > a");

    this.programName = page.locator(".course-name a");
    
  }

  
}
