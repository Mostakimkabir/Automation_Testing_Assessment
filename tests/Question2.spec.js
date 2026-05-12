import { test, expect } from "allure-playwright";
import { LoginPage } from "../pageObject/LoginPage";
import { Checkout } from "../pageObject/Checkout";

const username = "standard_user";
const password = "secret_sauce";
const firstName = "Mostakim";
const lastname = "Kabir";
const postalcode = "1204";

test.describe("Swag Labs purchase functionality test", () => {
  let loginPage, checkout;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto("https://www.saucedemo.com/");
    await loginPage.login(username, password);
    await page.waitForLoadState("networkidle");
  });

  test("Validate purchase journey", async ({ page }) => {
    checkout = new Checkout(page);
    await checkout.clickButton("Open Menu");
    await page.waitForLoadState("networkidle");
    await checkout.clickResetAppState();
    await page.waitForLoadState("networkidle");
    await checkout.clickButton("Close Menu");
    await page.waitForLoadState("networkidle");
    await checkout.addProductOneToCart();
    await checkout.addProductTwoToCart();
    await checkout.addProductThreeToCart();
    await checkout.openCart();
    await checkout.clickButton("Checkout");
    await checkout.checkoutInformation(firstName, lastname, postalcode);
    await checkout.clickButton("Continue");
    await expect(checkout.productNameFromOverview("Sauce Labs Backpack")).toBeVisible();
    await expect(checkout.productNameFromOverview("Sauce Labs Fleece Jacket")).toBeVisible();
    await expect(checkout.productNameFromOverview("Test.allTheThings() T-Shirt (Red)")).toBeVisible();
    await expect(checkout.totalPrice).toBeVisible();
    await checkout.clickButton("Finish");
    await expect(checkout.successMessage).toBeVisible();
    await checkout.clickButton("Open Menu");
    await checkout.clickResetAppState();
    await checkout.clickLogout(); 
  });
});