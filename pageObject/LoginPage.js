import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.userNameInput = this.page.getByRole("textbox", { name: "Username" });
        this.passwordInput = this.page.getByRole("textbox", { name: "Password" });
        this.errorMessage = this.page.getByText("Epic sadface: Sorry, this user has been locked out.");
    }

    async enterUserName(username) {
        await this.userNameInput.fill(username);
    }

    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    async login(username, password) {
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickButton("Login");
    }
}