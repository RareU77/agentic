import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
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
