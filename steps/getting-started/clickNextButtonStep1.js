import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import {
  paymentPlanPage,
  startApplicationPage,
} from "../../globalPagesSetup.js";

When(
  'user submits valid personal details with {string}',
  async function (fieldSet) {
    if (fieldSet !== "all fields" && fieldSet !== "required fields only") {
      throw new Error(`Unsupported personal details field set: ${fieldSet}`);
    }

    await startApplicationPage.fillPersonalDetails({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      phoneNumber: faker.string.numeric(10),
      ...(fieldSet === "all fields" ? { howDidYouHear: "Google" } : {}),
    });
    await startApplicationPage.clickNextButton();
  }
);

Then("the payment plan step is displayed", async function () {
  await expect(paymentPlanPage.chooseAPaymentPlanText).toBeVisible();
});
