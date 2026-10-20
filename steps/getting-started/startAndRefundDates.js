import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


Then('the program start date is displayed', async function () {
    await expect(startApplicationPage.programStartDate).toBeVisible();
});

Then('the program refund date is displayed', async function () {
    await expect(startApplicationPage.refundEndDate).toBeVisible();
});

Then('the displayed start date for the program is correct', async function () {
    await expect(startApplicationPage.programStartDate).toHaveText(
        productInfo.startDate
    );
});

Then('the displayed refund date for the program is correct', async function () {
    await expect(startApplicationPage.refundEndDate).toHaveText(
        productInfo.refundDate
    );
});
