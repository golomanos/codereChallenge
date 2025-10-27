import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test.describe('Check Login response for non-existent user', () => {
    test('Attempting to login with non-existent user credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goToHomePage();
        await loginPage.openLoginModal();
        await loginPage.checkLoginModalIsVisible();
        await loginPage.fillLoginForm('nonExistentUser', 'somePassword123');
        await loginPage.checkWrongCredentialsLogin();
    }); 
});