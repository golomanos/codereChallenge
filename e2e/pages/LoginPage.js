const { expect } = require('@playwright/test');

// @ts-check
exports.LoginPage = class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
        this.page = page;
        this.loginButton = page.getByRole('button', { name: 'Acceder'});
        this.closeModalButton = page.locator('.closeModal'); // This selector is to check the login modal is visible
        this.usernameImput = page.locator('name=username');
        this.passwordImput = page.locator('name=password');
        this.submitButton = page.locator('id=btnaccess');
  }
  async goToHomePage() {
        await this.page.goto('/');
        await expect(this.page).toHaveURL(/.*codere.es/); // Verify we are on the correct page
  }    
  async openLoginModal() {
        await this.loginButton.isVisible();
        await this.loginButton.click();
  }
  async checkLoginModalIsVisible() {
        await this.closeModalButton.isVisible(); // Verify the login modal is visible
  }}

