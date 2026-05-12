import { test, expect } from "@playwright/test";
import { LoginPage } from "../pageObject/LoginPage.js";

const username = "locked_out_user";
const password = "secret_sauce";

test.describe("Login page functionality test", () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto("https://www.saucedemo.com/");
    await page.waitForLoadState("networkidle");
  });

  test("Verify the error message", async ({ page }) => {
  await loginPage.enterUserName(username);
  await loginPage.enterPassword(password);
  await loginPage.clickButton("Login");
  await expect(loginPage.errorMessage).toBeVisible();
  });
});