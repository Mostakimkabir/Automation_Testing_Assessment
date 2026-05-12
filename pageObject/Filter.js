import { BasePage } from "./basePage";

export class Filter extends BasePage {
    constructor(page) {
        super(page);
        this.filter = this.page.locator("//select[@class='product_sort_container']");
        this.firstProductAddToCart = this.page.locator("//button[contains(@id,'add-to-cart-test.allthethings()-t-shirt-(red)')]");
    }

    async filterDropdown(value) {
        await this.filter.selectOption(value);
    }

    async addFirstProductToCart() {
        await this.firstProductAddToCart.click();
    }
}