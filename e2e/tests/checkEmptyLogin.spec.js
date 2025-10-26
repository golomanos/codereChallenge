import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test.describe('Check empty fields login error message', () => {
  test('Clicking to login without typing any credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToHomePage();
    await loginPage.openLoginModal();
    await loginPage.checkLoginModalIsVisible();
    await loginPage.fillLoginForm('', '');
    await loginPage.checkEmptyLoginForm();
  });
});