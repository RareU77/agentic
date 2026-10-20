import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { startApplicationPage } from "../../globalPagesSetup.js";

Then(
  "the first name, last name, and email fields are present with expected types",
  async function () {
    await expect(startApplicationPage.firstNameInputBox).toBeVisible();
    await expect(startApplicationPage.firstNameInputBox).toHaveJSProperty(
      "type",
      "text"
    );
    await expect(startApplicationPage.lastNameInputBox).toBeVisible();
    await expect(startApplicationPage.lastNameInputBox).toHaveJSProperty(
      "type",
      "text"
    );
    await expect(startApplicationPage.emailInputBox).toBeVisible();
    await expect(startApplicationPage.emailInputBox).toHaveAttribute(
      "type",
      "email"
    );
  }
);

Then("the phone field accepts numbers only", async function () {
  await startApplicationPage.phoneNumberInputBox.fill("12ab34");
  await expect(startApplicationPage.phoneNumberInputBox).toHaveValue(/^\d*$/);
});

Then("the email field rejects malformed addresses", async function () {
  await startApplicationPage.emailInputBox.fill("invalid-email");
  await expect(startApplicationPage.emailFormatInvalidInput).toBeVisible();
});

Then("the referral source dropdown displays standard options", async function () {
  await expect(
    startApplicationPage.howDidYouHearAboutUsDropDown
  ).toBeVisible();
  await expect(
    startApplicationPage.howDidYouHearAboutUsDropDown
  ).toHaveAttribute("aria-haspopup", "listbox");

  await startApplicationPage.howDidYouHearAboutUsDropDown.press("Enter");
  await expect(startApplicationPage.googleOption).toBeVisible();
});

Then(
  "the Next button is disabled when required personal details are missing",
  async function () {
    await expect(startApplicationPage.nextButton).toBeDisabled();
  }
);

When(
  "required personal details are {string}",
  async function (validationState) {
    switch (validationState) {
      case "missing":
        return;
      case "invalid email":
        await startApplicationPage.fillPersonalDetails({
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: "invalid-email",
          phoneNumber: faker.string.numeric(10),
        });
        return;
      default:
        throw new Error(`Unsupported personal detail validation state: ${validationState}`);
    }
  }
);

Then("the Next button is disabled", async function () {
  await expect(startApplicationPage.nextButton).toBeDisabled();
});
