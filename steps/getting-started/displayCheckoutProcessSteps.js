import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage } from "../../globalPagesSetup.js";

Then("the checkout process steps are displayed in order", async function () {
  await expect(startApplicationPage.startApplicationStepCircle).toHaveText("1");
  await expect(startApplicationPage.startApplicationText).toHaveText(
    "Start Application"
  );
  await expect(startApplicationPage.paymentPlanStepCircle).toHaveText("2");
  await expect(startApplicationPage.paymentPlanText).toHaveText(/Payment Plan/i);
  await expect(startApplicationPage.reviewStepCircle).toHaveText("3");
  await expect(startApplicationPage.reviewText).toHaveText("Review");
});

Then("the start application step is highlighted in blue", async function () {
  await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS(
    "background-color",
    "rgb(1, 201, 255)"
  );
});

Then("the payment plan and review steps are displayed in grey", async function () {
  await expect(startApplicationPage.paymentPlanText).toHaveCSS(
    "color",
    "rgb(130, 154, 177)"
  );
  await expect(startApplicationPage.reviewText).toHaveCSS(
    "color",
    "rgb(130, 154, 177)"
  );
});
