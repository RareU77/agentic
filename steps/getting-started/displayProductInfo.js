import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  leftMainPage,
  startApplicationPage,
} from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("the product name is displayed on the information card", async function () {
  await expect(startApplicationPage.programNameOnInfoCard).toBeVisible();
  await expect(startApplicationPage.programNameOnInfoCard).toHaveText(
    productInfo.productName
  );
});

Then(
  "the product name on the information card matches the left-side product name",
  async function () {
    await expect(startApplicationPage.programNameOnInfoCard).toHaveText(
      productInfo.productName
    );
    await expect(leftMainPage.programName).toHaveText(productInfo.productName);
  }
);

Then("the displayed product price matches catalog data", async function () {
  const expectedPrice =
    productInfo.prices[0].baseAmount -
    productInfo.prices[0].upfrontDiscountAmount;

  await expect(startApplicationPage.programPrice).toBeVisible();
  await expect(startApplicationPage.programPrice).toContainText(
    String(expectedPrice)
  );
});

Then("the flexible payment plan text is displayed", async function () {
  await expect(
    startApplicationPage.flexiblePaymentsPlanAvailableText
  ).toBeVisible();
});

Then("the return policy is displayed", async function () {
  await expect(startApplicationPage.refundPolicyText).toBeVisible();
  await expect(startApplicationPage.refundPolicyText).toHaveText(
    "100% refund"
  );
});
