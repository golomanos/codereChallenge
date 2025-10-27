import { checkAccessDenied } from '../utils/checkAccess.js';
const { expect } = require('@playwright/test');


// @ts-check
exports.LoginPage = class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
        const emptyLoginErrorMessage = "Revisa que todos los campos estén rellenos";
        const modal = page.locator('ion-modal'); // This selector will help to scope the locators inside the modal
        const alert = page.locator('ion-alert'); // This is a helper to interact with the elements inside the alert
        this.page = page;
        this.acceptCookiesButton = page.getByRole('button', { name: 'Aceptar' });
        this.loginButton = page.locator('.btAccess'); // Selector for the login button on the homepage
        this.usernameInput = modal.locator('input[name="username"]');
        this.passwordInput = modal.locator('input[name="password"]');
        this.submitButton = modal.locator('id=btnaccess').filter({ hasText: 'Acceder' });
        this.emptyLoginErrorMsg = alert.getByText(emptyLoginErrorMessage);
        this.okButton = alert.locator('button').filter({ hasText: 'OK' });
        
  }
  async goToHomePage() {
        const reponse = await this.page.goto('/');
        await checkAccessDenied(reponse);
        await expect(this.page).toHaveURL(/.*codere.es/); // Verify we are on the correct page
        if (await this.acceptCookiesButton.isVisible()) {
          await this.acceptCookiesButton.click(); // Accepts cookies to avoid blocking other elements
        }
    }
      
  async openLoginModal() {
        await this.loginButton.isVisible();
        await this.loginButton.click();
  }
  async checkLoginModalIsVisible() {
        await expect(this.submitButton).toBeVisible(); // Verify the login modal is visible

  }
  async fillLoginForm(username, password) {
        await expect(this.usernameInput).toBeEnabled();
        await this.usernameInput.fill(username);
        await expect(this.passwordInput).toBeEnabled();
        await this.passwordInput.fill(password);
        await this.submitButton.click();
  }
  async checkEmptyLoginForm(){
        await expect(this.emptyLoginErrorMsg).toBeVisible();
        await expect(this.okButton).toBeVisible();
        await this.okButton.click();
  }
}
