import { BasePage } from "./basePage";

export class Checkout extends BasePage {
    constructor(page) {
        super(page);
        this.resetAppState = this.page.locator("//a[@id='reset_sidebar_link']");
        this.productOne = this.page.locator("//button[contains(@id,'add-to-cart-sauce-labs-backpack')]");
        this.productTwo = this.page.locator("//button[contains(@id,'add-to-cart-sauce-labs-fleece-jacket')]");
        this.productThree = this.page.locator("//button[contains(@id,'add-to-cart-test.allthethings()-t-shirt-(red)')]");
        this.cartIcon = this.page.locator("//a[@class='shopping_cart_link']");
        this.firstNameInput = this.page.getByRole("textbox", { name: "First Name" });
        this.lastNameInput = this.page.getByRole("textbox", { name: "Last Name" });
        this.postalCodeInput = this.page.getByRole("textbox", { name: "Zip/Postal Code" });
        this.totalPrice = this.page.locator('[data-test="total-label"]');
        this.successMessage = this.page.getByText("Thank you for your order!");
        this.logout = this.page.locator("//a[@id='logout_sidebar_link']");
    }

    async clickResetAppState() {
        await this.resetAppState.click();
    }

    async addProductOneToCart() {
        await this.productOne.click();
    }

    async addProductTwoToCart() {
        await this.productTwo.click();
    }

    async addProductThreeToCart() {
        await this.productThree.click();
    }

    async openCart() {
        await this.cartIcon.click();
    }

    async enterFirstName(firstname) {
        await this.firstNameInput.fill(firstname);
    }

    async enterLastName(lastname) {
        await this.lastNameInput.fill(lastname);
    }

    async enterPostalCode(postalcode) {
        await this.postalCodeInput.fill(postalcode);
    }

    async clickLogout() {
        await this.logout.click();
    }

    async checkoutInformation(firstname, lastname, postalcode) {
        await this.enterFirstName(firstname);
        await this.enterLastName(lastname);
        await this.enterPostalCode(postalcode);
    }

    productNameFromOverview(productName) {
        return this.page.getByText(productName);
    }
}