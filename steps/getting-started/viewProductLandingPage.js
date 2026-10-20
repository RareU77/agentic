import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  leftMainPage,
  startApplicationPage,
} from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("the Cydeo Secure Checkout text is displayed", async function () {
  await expect(leftMainPage.secureCheckout).toContainText(
    "Cydeo Secure Checkout"
  );
});

Then("the program name is displayed on the left side", async function () {
  await expect(leftMainPage.programName).toBeVisible();
  await expect(leftMainPage.programName).toHaveText(productInfo.programName);
});

Then(
  "the left footer displays the logo and policy links in order",
  async function () {
    await expect(leftMainPage.cydeoImageAtLeftWindow).toBeVisible();
    await expect(leftMainPage.footerElements).toHaveCount(5);
    await expect(leftMainPage.footerElements.nth(0).locator("img")).toBeVisible();
    await expect(leftMainPage.footerElements.nth(1)).toHaveText(
      /^Terms and conditions$/i
    );
    await expect(leftMainPage.footerElements.nth(2)).toHaveText(
      "Privacy Policy"
    );
    await expect(leftMainPage.footerElements.nth(3)).toHaveText("Disclaimer");
    await expect(leftMainPage.footerElements.nth(4)).toHaveText("Cookie Policy");
  }
);

Then("the help contact is displayed in the right footer", async function () {
  await expect(startApplicationPage.footer).toHaveText(
    "Need help? Contact us at enrollment@cydeo.com"
  );
});